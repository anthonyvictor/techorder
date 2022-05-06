import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useApi } from "./context/api"
import { useLocal } from "./context/local"
import { Loading } from "./views/loading"

export const Auth: FC = () => {
    const {auth} = useApi()
    const {token, setToken} = useLocal()
    const [isLoading, setIsLoading] = useState(true)
    const { theme } = useLocal()
    const navigate = useNavigate()

    useEffect(() => {
        let montado = true
        
        async function tryToken() {
            setIsLoading(true)
            if(token && token !== ''){
                const response = await auth(token)
                setIsLoading(false)
                if(response){
                    setToken(response)
                    navigate('/home')
                }else{
                    setToken(null)
                    navigate('/login')
                }
            }else{
                setIsLoading(false)
                navigate('/login')
            }
        }
        
        tryToken()
        return () => {montado = false}
    }, [])

    

    return (isLoading ? <Loading /> : <></>)
  }