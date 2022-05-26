import { createContext, FC, ReactNode, useCallback, useContext, useState } from "react";
import { IUser } from "../interfaces/IUser";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { useLocal } from "./local";

type Props = { children: ReactNode }

interface IApiContext {
    api: (timeoutMs?: number) => AxiosInstance
}

const ApiContext = createContext({} as IApiContext)

export const ApiProvider : FC<Props> = ({children}) => {
    const { token } = useLocal()
    
    const api = (timeoutMs : number = 5) => {
        return axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: token ? {token: token} : undefined,
            timeout: timeoutMs * 1000
        })
    }

    return (
        <ApiContext.Provider value={{api}}>
            {children}
        </ApiContext.Provider>
    )
}


export const useApi = () => {
    return useContext(ApiContext)
}