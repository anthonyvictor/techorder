import React, { createRef, FC, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputLabel } from "../../components/inputs/inputWithLabel"
import { Container } from "./styles"
import { ButtonMain } from "../../styles/buttons"
import { useUser } from "../../context/controllers/user"
import { InitialContainer } from "../../components/containers/initialContainer"
import { LoginRegisterContainer } from "../../components/containers/loginRegisterContainer"
import backImg from '../../assets/images/register-background.jpg'
import { removeAccents } from "../../util/misc"

export const Register : FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [registry, setRegistry] = useState<string>('')
    
    const [nameInvalid, setNameInvalid] = useState<string>('')
    const [emailInvalid, setEmailInvalid] = useState<string>('')
    const [passwordInvalid, setPasswordInvalid] = useState<string>('')
    const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState<string>('')
    const [registryInvalid, setRegistryInvalid] = useState<string>('')
    
    const userContext = useUser()

    const navigate = useNavigate()

    const blockReload = useCallback((e:any) => {
        e.preventDefault()
        e.returnValue = ''
    }, [])

    useEffect(() => {
        window.addEventListener('beforeunload', blockReload)
        return () => window.removeEventListener('beforeunload', blockReload)
    }, [])

    function openLogin(e: React.MouseEvent<HTMLElement>){
        e.preventDefault()
        navigate('/login')
    }

    function validAll(){
        return (
            validName() &&
            validEmail() &&
            validPassword() &&
            validConfirmPassword() &&
            validRegistry() 
        )
    }

    function validName(){
        let r = false
        const s = (t:string) => setNameInvalid(t)
        const value = name
        const valueNoAcc = removeAccents(value)

        if(value.replace(' ', '') === '') {
            s('Please, insert a valid name')
        }else if((valueNoAcc.match(/[^a-zA-Z\s]/ig)?.length ?? 0) > 0){
            s('Only alphabetically characters are allowed')
        }else if(value.replace(' ', '').length < 5){
            s('Username must have minimum 5 characters')
        }else{
            s('')
            r = true
        }
        return r
    }

    function validEmail(){
        let r = false
        const s = (t:string) => setEmailInvalid(t)
        const value = email

        if(value.replace(' ', '') === '') {
            s('Please, insert a valid email')
        }else if( ((value?.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i)?.length ?? 0) === 0) ){
            s('Email is not valid')
        }else if( !userContext.isUniqueEmail(value) ){
            s("This email is already in use. Don't you want to sign-in?")
        }else{
            s('')
            r = true
        }
        return r
    }

    function validRegistry(){
        let r = false
        const s = (t:string) => setRegistryInvalid(t)
        const value = registry

        if(value.replace(' ', '') === '') {
            s(`Please, insert a valid ${navigator.language === 'pt-BR' ? 'CPF/CNPJ' : 'SSR'} number`)
        }else if( navigator.language === 'pt-BR' && value.length !== 11 && value.length !== 14 ){
            s('CPF is not valid!')
        }else if( navigator.language !== 'pt-BR' && value.length !== 8){
            s('SSN is not valid!')
        }else if( !userContext.isUniqueRegistry(value) ){
            s(`This ${navigator.language === 'pt-BR' ? 'CPF/CNPJ' : 'SSN'} is already registered.  Don't you want to sign-in?`)
        }else{
            s('')
            r = true
        }
        return r
    }

    function validPassword(){
        let r = false
        const containLower = password.match(/[a-z]/g)?.length ?? 0
        const containUpper = password.match(/[A-Z]/g)?.length ?? 0
        const containNumber = password.match(/[0-9]/g)?.length ?? 0

        if(containLower === 0 || containUpper === 0 || containNumber === 0){
            setPasswordInvalid("Password must contains at least 8 characters, being uppercase and lowercase letters and numbers!")
        }else{
            setPasswordInvalid("")
            r = true
        }
        return r
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

    function formatRegistry(e:any){
        let value = e.target.value
        if(navigator.language === 'pt-BR'){
            if(value.length === 11){
                const p1 = value.slice(0,3) 
                const p2 = value.slice(3,6) 
                const p3 = value.slice(6,9)
                const p4 = value.slice(9,11)
                value = `${p1}.${p2}.${p3}-${p4}`
            }else if(value.length === 14){
                const p1 = value.slice(0,2) 
                const p2 = value.slice(2,5) 
                const p3 = value.slice(5,8)
                const p4 = value.slice(8,12)
                const p5 = value.slice(12,14)
                value = `${p1}.${p2}.${p3}/${p4}-${p5}`
            }
        }else{
            if(value.length === 8){
                const p1 = value.slice(0,3) 
                const p2 = value.slice(3,5) 
                const p3 = value.slice(5,9)
                value = `${p1}-${p2}-${p3}`
            }
        }
        e.target.value = value
    }

    function submitRegister(e:any){
        e.preventDefault()
        if(validAll()){
            alert('Passou')
        }
    }
    return (
        <LoginRegisterContainer className="view">

            <InitialContainer>
            <header>
                    <h4>Register now to start send requests!</h4>
                </header>
                <form onSubmit={submitRegister}>
                        <InputLabel 
                        label="Name/Company" 
                        type='text' 
                        autoFocus={true}
                        required={true}
                        state={{get:name, set:setName}} 
                        invalid={{get:nameInvalid, set:setNameInvalid}}
                        caseConvert='upper'
                        />
                        <InputLabel 
                        label="Email" 
                        type='email' 
                        validKeys={/[0-9a-zA-Z@_\.]/}
                        required={true}
                        state={{get:email, set:setEmail}} 
                        invalid={{get:emailInvalid, set:setEmailInvalid}}
                        caseConvert='lower'
                        />
                        <InputLabel 
                        label="Password" 
                        type='password' 
                        required={true}
                        state={{get:password, set:setPassword}} 
                        invalid={{get:passwordInvalid, set:setPasswordInvalid}}
                        />
                        <InputLabel 
                        label="Confirm your password" 
                        type='password'
                        required={true}
                        state={{get:confirmPassword, set:setConfirmPassword}}
                        invalid={{get:confirmPasswordInvalid, set:setConfirmPasswordInvalid}}
                        />

                        <InputLabel 
                        label={navigator.language === 'pt-BR' ? 'CPF/CNPJ' : 'SSN'}
                        type='tel'
                        maxLen={14}
                        validKeys={/[0-9]/}
                        required={true}
                        state={{get:registry, set:setRegistry}}
                        blur={formatRegistry}
                        invalid={{get:registryInvalid, set:setRegistryInvalid}}
                        />

                    <ButtonMain type="submit" onClick={submitRegister}>REGISTER</ButtonMain>
                </form>
                <footer>
                    <p>Already have an account? <a href="/login" onClick={openLogin}>Sign in</a></p>
                </footer>
            </InitialContainer>
</LoginRegisterContainer>
    )
}