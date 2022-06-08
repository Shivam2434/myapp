import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import api from '../../utils/api';

const LoginComponent = () => {
    const navigate = useNavigate();

    let [username, setUsername] = useState('')

    let handleSubmit = () => {
        localStorage.setItem('username', username)
        let data = {
            name: username
        }
        axios.post(api+"/api/auth/signup",data).then(response => {
            console.log("Success :: ",response)
            navigate("/")
        }).catch(err => {
            console.log("Error :: ",err);
        })
    }

    let handleUsername = (e) => {
        setUsername(e.target.value)
    }

    return(
        <Container>
            <h1>Login</h1>
            <br/>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleUsername} type="text" placeholder="Enter your Name" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>
    )
}

export default LoginComponent;