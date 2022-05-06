import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputLabel } from "../../components/inputs/inputWithLabel"
import { Container } from "./styles"

export const Register : FC = () => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const navigate = useNavigate()

    function openLogin(e: React.MouseEvent<HTMLElement>){
        e.preventDefault()
        navigate('/login')
    }

    return (
        <Container className="view">
            <div className="container">
                <header>
                    <h4>Register now to start send requests today!</h4>
                </header>
                <form>
                    {/* <section id="new-username-section"> */}
                        <InputLabel label="New Username" type='text' state={{get:username, set:setUsername}} />
                    {/* </section> */}
                    <section id="username-section">
                        <label> 
                            Username
                        </label>
                        <input type={'text'}
                        value={username} onChange={e => setUsername(e.target.value)} />
                    </section>
                    <section id="email-section">
                        <label> 
                            Email
                        </label>
                        <input type={'email'}
                        value={email} onChange={e => setEmail(e.target.value)} />
                    </section>
                    <section id="password-section">
                        <label>
                            Password
                        </label>
                        <input type={'password'}
                        value={password} onChange={e => setPassword(e.target.value)} />
                    </section>
                    <section id="confirm-password-section">
                        <label>
                            Confirme your password
                        </label>
                        <input type={'password'}
                        value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </section>
                    <button type="submit">REGISTER</button>
                </form>
                <footer>
                    <p>Already have an account? <a href="#" onClick={openLogin}>Sign in</a></p>
                </footer>
            </div>
        </Container>
    )
}