import React, {useState} from 'react';
import InputForm from "../InputForm";
import {RegButton} from "../style";

type Values = {
    name: string,
    email : string,
    password : string,
    passwordConfirm: string,
}

const FormSignUp = () => {
    const [value, setValue] = useState<Values>({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    const DataForm = () => {
        console.log(value)
    }
    return (
        <>
            <InputForm
                label={'Name'}
                type={'text'}
                name={'name'}
                placeholder={'Your name'}
                value={value.name}
                error
                onChange={handleChange}/>
            <InputForm
                label={'Email'}
                type={'email'}
                name={'email'}
                placeholder={'Your email'}
                value={value.email}
                error
                onChange={handleChange}/>
            <InputForm
                label={'Password'}
                type={'password'}
                name={'password'}
                placeholder={'Your password'}
                value={value.password}
                error
                onChange={handleChange}/>
            <InputForm
                label={'PasswordConfirm'}
                type={'password'}
                name={'passwordConfirm'}
                placeholder={'Confirm password'}
                value={value.passwordConfirm}
                error
                onChange={handleChange}/>
            <RegButton onClick={DataForm}>Sign Up</RegButton>
        </>
    );
};

export default FormSignUp;