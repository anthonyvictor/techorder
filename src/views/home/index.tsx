import { FC } from "react"
import { useLocal } from "../../context/local"

export const Home : FC = () => {
    const {setToken} = useLocal()
    return (
        <div className="a">
            <h1>Home</h1>
            <p>Welcome to homepage</p>
            <button onClick={() => {
                setToken(null)
            }}>Logout</button>
        </div>
    )
}