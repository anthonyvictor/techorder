import { createContext, FC, ReactNode, useContext, useState } from "react";
import * as Themes from "../styles/themes";

interface ILocalContext{
    token: string | null
    setToken: Function
    theme: Themes.Theme
    setTheme: Function
}

const LocalContext = createContext({} as ILocalContext)

type Props = {
    children: ReactNode
}

export const LocalProvider: FC<Props> = ({children}) => {
    const [token, _setToken] = useState<string | null>( getLocalToken() )
    const [theme, _setTheme] = useState<Themes.Theme>( getLocalTheme() )

    function getLocalToken() : string | null {
        return localStorage.getItem('token')
    }

    function getLocalTheme() : Themes.Theme {
        const localTheme = localStorage.getItem('theme')
        if(localTheme && localTheme !== ''){
            try{
                return  Themes[localTheme as keyof typeof Themes]
            }catch{
                return Themes.dark
            }
        }else{
            return Themes.light
        }
    }

    function setToken(newToken: string | null) {
        localStorage.setItem('token', newToken ?? '')
        _setToken(newToken)
    }
    function setTheme(newTheme: Themes.Theme | null) {
            console.log(typeof newTheme, newTheme)
        // localStorage.setItem('theme', typeof newTheme ?? '')
        // _setTheme(newTheme)
    }

    return (
        <LocalContext.Provider value={{token, setToken, theme, setTheme}}>
            {children}
        </LocalContext.Provider>
    )
}

export const useLocal = () => {
    return useContext(LocalContext)
}