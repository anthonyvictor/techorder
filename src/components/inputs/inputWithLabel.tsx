import React, { createRef, Dispatch, FC, memo, SetStateAction, useEffect, useRef } from "react";
import { InputWithLabelContainer } from "../../styles/inputs";

type Props = {
  label: string;
  type: React.HTMLInputTypeAttribute;//"text" | "tel" | "email" | "password";
  state: { get: string; set: Dispatch<SetStateAction<string>> | Function};
  invalid?: { get: string; set: Dispatch<SetStateAction<string>> };
  myRef?: React.RefObject<HTMLInputElement>
  keyUp?: Function
  blur?: (e:any) => void
  autoFocus?: boolean
  required?: boolean
  caseConvert?: 'upper' | 'lower'
  validKeys?: RegExp
  min?: number
  maxLen?: number
  max?: number
};

const InputLabel2: FC<Props> = (props) => {

   const {label, type, state, myRef, invalid, 
    autoFocus, required, caseConvert, validKeys, 
    maxLen, min, max, blur} = props

  const handleKeyUp = (e: any) => {
    if(e.key !== 'Enter' && (!validKeys || (e.key.match(validKeys)?.length ?? 0) > 0)){
      setTimeout(() => {
        invalid?.set('')
      }, 1000)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if(
      e.key !== 'Backspace' &&
      e.key !== 'Enter' &&
      validKeys && (e.key.match(validKeys)?.length ?? 0) === 0
      ){
      e.preventDefault()
    }
  }
  const handleChange = (e: any) => {
    let value = String(e.target.value)
    if(caseConvert === 'upper') value = value.toUpperCase()
    if(caseConvert === 'lower') value = value.toLocaleLowerCase()
    
    state.set(value)
  }

  const handleBlur = (e: any) => {
    e.target.value = String(e.target.value).trim()
    blur && blur(e)
  }
  return (
    <InputWithLabelContainer className={`input-with-label${(invalid?.get ?? '') !== '' ? ' not-valid' : undefined}`}>
      <label>{label}</label>
      <input ref={myRef}
        type={type}
        maxLength={maxLen ?? undefined}
        min={min ?? 0}
        max={max ?? undefined}
        autoFocus={autoFocus ?? false}
        required={required ?? false}
        value={state.get ?? ""}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        
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
    (prevProps.invalid?.get ?? '') === (nextProps.invalid?.get ?? '') &&
    (prevProps.myRef?.current === nextProps.myRef?.current)
    return equal
}

export const InputLabel = memo(InputLabel2, areEqual)