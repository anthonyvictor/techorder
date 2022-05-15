import { FC, ReactNode } from "react"
import { LoginRegisterContainerStyle } from "./styles"


type Props = {
    className: string
    children: ReactNode
}
export const LoginRegisterContainer : FC<Props> = ({children}) => {

    return (
        <LoginRegisterContainerStyle>
            {children}
        </LoginRegisterContainerStyle>
    )
}