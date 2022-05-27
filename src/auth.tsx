import { FC, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useMessage } from "./components/message"
import { useApi } from "./context/api"
import { useLocal } from "./context/local"
import { Loading } from "./views/loading"

export const Auth: FC = () => {
    const { token, setToken } = useLocal()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { api } = useApi()
    const {message} = useMessage()

    useEffect(() => {
        let mounted = true
        let timer : number
        
        async function tryToken() {
           if(token){
                try{
                    setIsLoading(true)

                    const response = await api().get('auth', {params: {token}})
                                            
                    if(response.status !== 200) throw new Error('Failed to login')
                    
                    navigate('/home')
                    
                }catch(err : any){
                    if(err.code === 'ERR_BAD_REQUEST'){
                        message({type: 'error', msg: 'Please, sign-in again!'})
                        setToken(null)
                    }else{
                        message({type: 'error', msg: err.message})
                    }
                    navigate('/login') 
                }finally{
                    setIsLoading(false)
                }
            }else{
               setIsLoading(false)
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