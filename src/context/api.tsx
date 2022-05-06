import { createContext, FC, ReactNode, useContext, useState } from "react";
// import axios from 'axios';

type Props = { children: ReactNode }
interface IApiContext {
    login: (user: string, password: string) => Promise<Object>
    auth: (token: string) => Promise<Object | null>
    api: () => Promise<Object>
}

const ApiContext = createContext({} as IApiContext)

export const ApiProvider : FC<Props> = ({children}) => {
    const [token, setToken] = useState<string>('')
    
    async function api() : Promise<Object> {
        const p =  new Promise<Object>((res, rej) => {res({})})
        const response = await p
        return response

    }
    
    async function login(user: string, password: string) : Promise<Object> {

        console.log(import.meta.env.BASE_URL)
        //LOGIN RETORNA O TOKEN, E CHAMA O MÉTODO SETTOKEN DO LOCALCONTEXT
        const p = new Promise<Object>((res, rej) => {res({})})
        const response = await p
        return response

    }

    const auth = (token: string) : Promise<Object | null> => {
        const p = new Promise<Object | null>((resolve, reject) => {
            
            const response: Object | null =  null //{data: 'a1asd5a21f5666a@43#$%55225'}
            resolve(response)
            
        })

        return p
    }

    return (
        <ApiContext.Provider value={{login, auth, api}}>
            {children}
        </ApiContext.Provider>
    )
}


export const useApi = () => {
    return useContext(ApiContext)
}