import { createRef, Dispatch, FC, memo, SetStateAction, useEffect, useRef } from "react";
import { InputWithLabelContainer } from "../../styles/inputs";

type Props = {
  label: string;
  type: React.HTMLInputTypeAttribute;//"text" | "tel" | "email" | "password";
  state: { get: string; set: Dispatch<SetStateAction<string>> };
  invalid?: { get: string; set: Dispatch<SetStateAction<string>> };
  myRef?: React.RefObject<HTMLInputElement>
  keyUp?: Function
};

const InputLabel2: FC<Props> = (props) => {
   const {label, type, state, myRef, invalid} = props

  return (
    <InputWithLabelContainer className={`input-with-label${(invalid?.get ?? '') !== '' ? ' not-valid' : undefined}`}>
      <label>{label}</label>
      <input ref={myRef}
        type={type}
        value={state.get ?? ""}
        onChange={(e) => state.set(e.target.value)}
        onKeyUp={() => invalid?.set('')}
        onBlur={(e) => e.target.value = String(e.target.value).trim()}
        
      />
      {invalid && invalid.get !== '' && (
          <small>{invalid.get}</small>
      )}
    </InputWithLabelContainer>
  );
};

function areEqual(prevProps : Props, nextProps : Props){
    const equal = 
    (prevProps.state.get ?? '') === (nextProps.state.get ?? '') &&
    (prevProps.invalid?.get ?? '') === (nextProps.invalid?.get ?? '')
    return equal
}

export const InputLabel = memo(InputLabel2, areEqual)