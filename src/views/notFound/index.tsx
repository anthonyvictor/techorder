import { FC } from "react";
import { Container } from "./styles";
import {BsLightningChargeFill} from 'react-icons/bs'
import {FaRobot} from 'react-icons/fa'
import { Link } from "react-router-dom";

export const NotFound : FC = () => {

    return (
        <Container>
            <h1 className="title">Oops!</h1>
            <div className="icons">
                <FaRobot />
                <BsLightningChargeFill />
            </div>
                <h1>404</h1>
            <h3>Desculpe, não pudemos encontrar a página solicitada.</h3>
            <Link to={'/'}>Voltar</Link>
        </Container>
    )
}