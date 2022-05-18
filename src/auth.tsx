import { FC, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useApi } from "./context/api"
import { useLocal } from "./context/local"
import { Loading } from "./views/loading"

export const Auth: FC = () => {
    const { token } = useLocal()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { api } = useApi()

    useEffect(() => {
        let mounted = true
        let timer : number
        
        async function tryToken() {
            try{
                if(!token || token === '') throw new Error('No token given') 
                    
                setIsLoading(true)
                    console.log('entrou auth')
                const response = await api().get('auth')
                    
                setIsLoading(false)
                    
                if(response.status !== 200) throw new Error('Failed to login')
                    
                navigate('/home')

            }catch(err){
                navigate('/login') 
            }
        }
        
        tryToken()
        return () => {
            mounted = false
            clearTimeout(timer)
        }
    }, [token])
    
    return isLoading ? <Loading /> : <Outlet />
  }