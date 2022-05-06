import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./auth";
import { Home } from "./views/home";
import { Login } from "./views/login";
import { Register } from "./views/register";

export const MyRoutes : FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/login'} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route element={<Auth />}>
                <Route path="/home" element={<Home />} />
            </Route>
            
        </Routes>
    )
}