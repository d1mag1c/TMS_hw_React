import React, {useState} from 'react';
import {ErrorMessage, Label} from "./style";
import {Input, InputFormBlock} from "./style";

type InputFormProps = {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    error: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputForm = (props: InputFormProps) => {

    const [error, setError] = useState(false)
    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value.length < 6 ? setError(true) : setError(false)
    }

    return (
        <InputFormBlock>
            <Label>{props.label}</Label>
            <Input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onBlur={validateValue}
                error={error && props.error}>
            </Input>
            {error && <ErrorMessage>{`error ${props.label}`}</ErrorMessage>}
        </InputFormBlock>
    );
};

export default InputForm;