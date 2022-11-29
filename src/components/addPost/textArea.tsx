import React, {useState} from 'react';
import {ErrorMessage, Label} from "../header/login/registration/InputForm/style";
import { TextArea, TextAreaBlock} from "./style";


type TextAreaProps = {
    label: string,
    name:string,
    placeholder: string,
    value: string,
    error?: boolean,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export const TextAreaComponent = (props: TextAreaProps) => {

    const [error, setError] = useState(false)
    const validateValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.value.length < 6 ? setError(true) : setError(false)
    }

    return (
        <TextAreaBlock>
            <Label>{props.label}</Label>
            <TextArea
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={validateValue}
                error={error && props.error}>
            </TextArea>
            {error && <ErrorMessage>{`error ${props.label}`}</ErrorMessage>}
        </TextAreaBlock>
    );
};