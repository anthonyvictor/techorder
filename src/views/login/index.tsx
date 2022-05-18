import { createRef, FC, useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { InputLabel } from "../../components/inputs/inputWithLabel"
import { ButtonMain } from "../../styles/buttons"
import { InitialContainer } from "../../components/containers/initialContainer"
import { LoginRegisterContainer } from "../../components/containers/loginRegisterContainer"
import enterpriseLogo from '../../assets/images/enterprise-logo.png'
import { useApi } from "../../context/api"
import { useLocal } from "../../context/local"

export const Login : FC = () => {
    
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { api} = useApi()
    const {setToken} = useLocal()
    
    const navigate = useNavigate()
    const usernameRef = createRef<HTMLInputElement>()

    function openRegister(e: React.MouseEvent<HTMLElement>){
        e.preventDefault()
        navigate('/register')
    }

    setTimeout(() => {
        if(usernameRef.current?.matches(':-internal-autofill-selected')){
            let interval = setInterval(() => {
                if(usernameRef.current){
                    setName(usernameRef.current.value)
                    clearInterval(interval)
                }
            }, 100)
        }
    }, 500);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const newToken = await login(name, password)
        if(newToken && newToken !== ''){
            setToken(newToken)
        }
        
    }
    /**
     * Returns a new token if credentials are correct 
     * */
    async function login(user: string, password: string) : Promise<string | null> {
        const payload = {user, password}
        const response = await api().post('login', payload)
        if(response.status === 201){
            const newToken = response.data
            console.log(newToken)
            if(newToken && newToken !== ''){
                return newToken
            }
        } 
        //login: (user: string, password: string) => Promise<Object>
        return null
    }

    return (
        <LoginRegisterContainer className="view">
            <InitialContainer>
            <header>
                    <img src={enterpriseLogo} />
                    <h4>Send requests was never so easy!</h4>
                </header>
                <form onSubmit={handleSubmit}>
                    <InputLabel 
                    label={`Username, Email or ${navigator.language === 'pt-BR' ? 'CPF/CNPJ' : 'SSN'}`} 
                    type={'text'} 
                    autoFocus={true}
                    required={true}
                    state={{get:name,set:setName}} 
                    />
                    <InputLabel 
                    label="Password" 
                    type={'password'} 
                    required={true}
                    state={{get:password,set:setPassword}} 
                    />
                    <small id="testpurpose">For test purposes, please type <cite>"John01" or "Panni01"</cite> for username and password</small>
                    <section id="keep-connected-section">
                        <label htmlFor="keep-connected">Keep me connected</label>
                        <input id="keep-connected" type={'checkbox'} />
                    </section>
                    <ButtonMain type="submit">SIGN IN</ButtonMain>
                </form>
                <footer>
                    <p>New user? <a href="/register" onClick={openRegister}>Register here</a></p>
                </footer>
            </InitialContainer>
        
                    </LoginRegisterContainer>
    )
}