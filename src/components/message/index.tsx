import { createContext, FC, ReactElement, useCallback, useContext, useEffect, useState } from "react";
import { SimpleProps } from "../../types/simpleProps";
import { Container } from "./styles";
import { VscChromeClose, VscComment, VscError, VscInfo, VscPass, VscWarning } from 'react-icons/vsc'

export interface IMessageProps {
    type? : 'error' | 'ok' | 'alert' | 'info', 
    msg? : string
}

interface IMessage{
    message: (props: IMessageProps) => void
}

const MessageContext = createContext({} as IMessage)

const messageTimeout = 4

export const MessageProvider : FC<SimpleProps> = ({children}) => {
    const [component, setComponent] = useState<ReactElement | null>(null)

    useEffect(() => {
        let timer : number | undefined = undefined
        
        if(component){
            timer = setTimeout(() => {
                message()
                clearTimeout(timer)
            }, messageTimeout * 1000);
        }else{
            clearTimeout(timer)
        }

        return () => { clearTimeout(timer) }
    }, [component])


    const message = (props : IMessageProps | undefined = undefined) => {
        if(!props?.type || !props?.msg){
            setComponent(null)
        }else{
            setComponent(<Message mp={props} close={() => message()} /> )
        }
    }

    return (
        <MessageContext.Provider value={{message}}>
            {children}
            {component && component}
        </MessageContext.Provider>
    )
}


export const useMessage = () => {
    return useContext(MessageContext)
}
interface IMessageProps2 {
    mp: IMessageProps,
    close: () => void
}

const Message : FC<IMessageProps2> = (props) => {
    const {mp, close} = props
    const {type, msg} = mp
    return (
        <Container timeout={messageTimeout} mp={{type:type}}>
            <div className="icon">
                {
                    type === 'alert' 
                    ? <VscWarning />
                    : type === 'error'
                    ? <VscError />
                    : type === 'info'
                    ? <VscInfo />
                    : type === 'ok'
                    ? <VscPass />
                    : <VscComment />
                }
            </div>
            <p className="message">{msg}</p>
            <button onClick={close}>
                <VscChromeClose />
            </button>
        </Container>
    )
}