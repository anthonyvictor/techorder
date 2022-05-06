import { FC } from "react";
import { InputWithLabelContainer } from "../../styles/inputs";

type Props = {
    label: string
    type: 'text' | 'tel' | 'email' | 'password'
    state: {get: string, set: Function}
}

export const InputLabel : FC<Props> = (props) => {
    return (
        <InputWithLabelContainer 
        label={props.label}
        type={props.type}
        value={props.state.get ?? ''}
        onChange={e => props.state.set(e.target.value)}
        onBlur={e => e.target.value = String(e.target.value).trim()}
        />
    )
}