import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../utils/api';

const HomeComponent = () => {
    let username  = localStorage.getItem('username')
    let [start, setStart] = useState(false);
    let [random, setRandom] = useState('');
    let [result, setResult] = useState([]);
    let [ans, setAns] = useState('');
    let [showRes, setShowRes] = useState(false);

    const navigate = useNavigate();

    let testResult = result.reduce((a, b) => a + b, 0)

    let handleStart = () => {
        setStart(!start)
        setShowRes(false);
    }

    let handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/login')
    }

    let handleAnswer = (e) => {
        setAns(e.target.value)
        if(random == e.target.value){
            setResult((val) => [...val, 2])
        }
        else if(e.target.value == "" || e.target.value != random){
            setResult((val) => [...val, -1])
        }
    }

    useEffect(() => {
        var startTime = new Date().getTime();
        let interval = setInterval(() => {
            if(new Date().getTime() - startTime > 60000){
                clearInterval(interval);
                setStart(false);
                setShowRes(true);
                setResult([])
                let data = {
                    result: testResult,
                    name: username
                }
                axios.post(api+"/api/auth/create/result",data).then(response => {
                    console.log("data saved !! ",response);
                }).catch(err => {
                    console.log("failed to add data in database ",err)
                })
                return;
            }
            setRandom(Math.floor(Math.random() * 90 + 10))
            setAns('');
        },3000)

        return () => {
            clearInterval(interval)
        }
    },[])

    return(
        <Container>
            <div className="text-end" style={{marginTop: '10px'}}>
                <Button onClick={handleLogout} type="button">Logout</Button>
            </div>
            <div className="text-center">
            <h1>Welcome {username} !!</h1>
            </div>
            {start ? null : <Button onClick={handleStart} type="button">Start</Button>}
        
        <br/>
        {start ? <div>
            <h2>{random}</h2>
            <br/>
            <div className="col-md-4">
            <input onChange={handleAnswer} value={ans} className="form-control" type="text" placeholder="Enter the Number mentioned above...." />
            </div>
        </div> : null}

        {showRes ? <div className="text-center">
            <h1>{testResult}</h1>
        </div> : null}

        </Container>
    )
}

export default HomeComponent