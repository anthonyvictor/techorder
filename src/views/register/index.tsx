import React, { createRef, FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputLabel } from "../../components/inputs/inputWithLabel"
import { Container } from "./styles"
import { ButtonMain } from "../../styles/buttons"

export const Register : FC = () => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [usernameInvalid, setUsernameInvalid] = useState<string>('')
    const [emailInvalid, setEmailInvalid] = useState<string>('')
    const [passwordInvalid, setPasswordInvalid] = useState<string>('')
    const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState<string>('')
    const {api} = useApi
    const navigate = useNavigate()
    const confirmPasswordRef = createRef<HTMLInputElement>()

    function openLogin(e: React.MouseEvent<HTMLElement>){
        e.preventDefault()
        navigate('/login')
    }

    function validAll(){
        return (
            validUsername() &&
            validEmail() &&
            validPassword() &&
            validConfirmPassword()
        )
    }

    function validUsername(){
        if(confirmPassword !== password){
            setConfirmPasswordInvalid("Passwords doesn't match!")
            return false
        }else{
            setConfirmPasswordInvalid("")
            return true
        }
    }

    function validEmail(){
        if(confirmPassword !== password){
            setConfirmPasswordInvalid("Passwords doesn't match!")
            return false
        }else{
            setConfirmPasswordInvalid("")
            return true
        }
    }

    function validPassword(){
        if(confirmPassword !== password){
            setConfirmPasswordInvalid("Passwords doesn't match!")
            return false
        }else{
            setConfirmPasswordInvalid("")
            return true
        }
    }

    function validConfirmPassword(){
        if(confirmPassword !== password){
            setConfirmPasswordInvalid("Passwords doesn't match!")
            return false
        }else{
            setConfirmPasswordInvalid("")
            return true
        }
    }

    function submitRegister(e:any){
        e.preventDefault()
        if(validAll()){
            alert('Passou')
        }
    }
    return (
        <Container className="view">
            <div className="container">
                <header>
                    <h4>Register now to start send requests today!</h4>
                </header>
                <form onSubmit={submitRegister}>
                        <InputLabel 
                        label="Username" 
                        type='text' 
                        state={{get:username, set:setUsername}} 
                        invalid={{get:confirmPasswordInvalid, set:setConfirmPasswordInvalid}}
                        />
                        <InputLabel 
                        label="Email" 
                        type='email' 
                        state={{get:email, set:setEmail}} 
                        invalid={{get:confirmPasswordInvalid, set:setConfirmPasswordInvalid}}
                        />
                        <InputLabel 
                        label="Password" 
                        type='password' 
                        state={{get:password, set:setPassword}} 
                        invalid={{get:confirmPasswordInvalid, set:setConfirmPasswordInvalid}}
                        />
                        <InputLabel 
                        label="Confirm your password" 
                        type='password'
                        state={{get:confirmPassword, set:setConfirmPassword}}
                        invalid={{get:confirmPasswordInvalid, set:setConfirmPasswordInvalid}}
                        myRef={confirmPasswordRef}
                        />
                    <ButtonMain type="submit" onClick={submitRegister}>REGISTER</ButtonMain>
                </form>
                <footer>
                    <p>Already have an account? <a href="#" onClick={openLogin}>Sign in</a></p>
                </footer>
            </div>
        </Container>
    )
}