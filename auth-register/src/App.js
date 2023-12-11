import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Components/HomePage";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/register" element={<RegisterPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    );
}

export default App;
