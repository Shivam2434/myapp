import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Login';
import NotFound from '../Components/404';
import Home from '../Components/Home';
 
const AllRoutes = () => {

    return(
        <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
        </>
    )
}

export default AllRoutes;