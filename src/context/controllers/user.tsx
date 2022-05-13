import { createContext, FC, ReactNode, useContext } from "react";
import { Registry } from "../../types/registry";
import { useApi } from "../api";

interface IUserContext{
    isUniqueUsername: (username: string) => boolean
    isUniqueRegistry: (registry: string) => boolean
    isUniqueEmail: (email: string) => boolean
}

const UserContext = createContext({} as IUserContext)

type Props = {
    children: ReactNode
}

export const UserProvider: FC<Props> = ({children}) => {

    const {api} = useApi()

    const isUniqueUsername = (username: string) : boolean => {
        //checa na api
        console.log(username)
        return true
    }
    const isUniqueEmail = (email: string) : boolean => {
        //checa na api
        console.log(email)
        return true
    }
    const isUniqueRegistry = (registry: string) : boolean => {
        //checa na api
        console.log(registry)
        return true
    }

    return (
        <UserContext.Provider value={{isUniqueUsername, isUniqueEmail, isUniqueRegistry}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}