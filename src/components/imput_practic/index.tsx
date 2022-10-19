import React, {useState} from 'react';
import {FormBlock, InputBlock, SpanBlock} from "./style";

type CustomInputProps ={
    type: 'password' | 'text' | 'email',
    placeholder: 'Введите текст' | 'Введите пароль'
}

const Input = ({type, placeholder}:CustomInputProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        value.length < 6 ? setError(true) : setError(false)
    }

    return (
        <FormBlock>
            <InputBlock error={error}
                        type={type}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        onBlur={validateValue}/>
            {error && <SpanBlock>aaa</SpanBlock>}
        </FormBlock>
    );
};

export default Input;