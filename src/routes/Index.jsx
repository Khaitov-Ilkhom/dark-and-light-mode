import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Single from "./single-page/Single.jsx";
import Home from "./home-page/Home.jsx";
import NotFound from "./not-found/NotFound.jsx";

const Index = () => {
    return (
        <>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/single" element={<Single/>}/>
             <Route path="/not-found" element={<NotFound/>}/>
             <Route path="*" element={<Navigate to="not-found"/>}/>
         </Routes>
        </>
    )
}
export default Index
