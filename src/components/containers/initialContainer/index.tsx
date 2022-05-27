import { FC, ReactNode } from "react"
import { InitialContainerStyle } from "./styles"

import { useLocal } from "../../../context/local"
import LogoLight from '../../../assets/svg/TechOrder-logo-horizontal-light.svg'
import LogoDark from '../../../assets/svg/TechOrder-logo-horizontal-dark.svg'
import { dark } from "../../../styles/themes"
import { Mobile } from "./mobile"

type Props = {
    children: ReactNode
}

export const InitialContainer : FC<Props> = ({children}) => {
    const {theme} = useLocal()

    return (
        <InitialContainerStyle>
            {children}
            <div className="techorder-logo">
                <small>Powered by:</small>
                <img src={theme === dark ? LogoLight : LogoDark} />
            </div>
            <Mobile />
        </InitialContainerStyle>
    )
}