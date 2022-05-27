import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./auth";
import { useApi } from "./context/api";
import { useLocal } from "./context/local";
import { ForgotPass } from "./views/forgotpass";
import { Home } from "./views/home";
import { Login } from "./views/login";
import { NotFound } from "./views/notFound";
import { RecoverPass } from "./views/recoverpass";
import { Register } from "./views/register";

export const MyRoutes : FC = () => {

    return (
        <Routes>
            
            <Route path="/" element={<Auth />}>
                
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpass" element={<ForgotPass />} />
                <Route path="/recoverpass/:token" element={<RecoverPass />} />
                
            </Route>

            <Route path="*" element={<NotFound />} />
            
        </Routes>
    )
}

// const NotLoggedRoutes = () => {
//     const { token } = useLocal()

//     const { auth } = useApi()
//     const 
//     if(auth(token))
// }
