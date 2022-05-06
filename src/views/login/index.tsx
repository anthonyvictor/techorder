import { createRef, FC, useEffect, useRef, useState } from "react"
import { Container } from "./styles"
import LogoLight from '../../assets/svg/TechOrder-logo-horizontal-light.svg'
import LogoDark from '../../assets/svg/TechOrder-logo-horizontal-dark.svg'
import { useLocal } from "../../context/local"
import { dark } from "../../styles/themes"
import { useNavigate } from "react-router-dom"
import { InputLabel } from "../../components/inputs/inputWithLabel"
import { ButtonMain } from "../../styles/buttons"

export const Login : FC = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {theme} = useLocal()
    
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
                    console.log(usernameRef.current.value)
                    setUsername(usernameRef.current.value)
                    clearInterval(interval)
                }
            }, 100)
        }
    }, 500);

    return (
        <Container className="view">
            <div className="container">
                <header>
                    <img src={theme === dark ? LogoDark : LogoLight} />
                    <h4>Send requests was never so easy!</h4>
                </header>
                <form>
                    <InputLabel 
                    label="Username or Email" 
                    type={'text'} 
                    state={{get:username,set:setUsername}} 
                    />
                    <InputLabel 
                    label="Password" 
                    type={'password'} 
                    state={{get:password,set:setPassword}} 
                    />
                    <section id="keep-connected-section">
                        <label htmlFor="keep-connected">Keep me connected</label>
                        <input id="keep-connected" type={'checkbox'} />
                    </section>
                    <ButtonMain>SIGN IN</ButtonMain>
                </form>
                <footer>
                    <p>New user? <a href="#" onClick={openRegister}>Register here</a></p>
                </footer>
            </div>
        </Container>
    )
}