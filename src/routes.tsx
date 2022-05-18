import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./auth";
import { useApi } from "./context/api";
import { useLocal } from "./context/local";
import { Home } from "./views/home";
import { Login } from "./views/login";
import { Register } from "./views/register";

export const MyRoutes : FC = () => {

    return (
        <Routes>
            
            <Route path="/" element={<Auth />}>
                
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
            </Route>
            
        </Routes>
    )
}

// const NotLoggedRoutes = () => {
//     const { token } = useLocal()

//     const { auth } = useApi()
//     const 
//     if(auth(token))
// }
