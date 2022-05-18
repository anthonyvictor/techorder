import { FC, useEffect } from "react"
import { Container } from "./styles"

export const Loading : FC = () => {
    useEffect(() => {console.log('renderizou')}, [])
    return (
        <Container className="loading-page">
            <div className="loader" />
        </Container>
    )
}