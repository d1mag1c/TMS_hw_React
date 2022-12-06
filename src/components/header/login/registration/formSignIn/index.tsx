import React, {useState} from 'react';
import InputForm from "../InputForm";
import {RegButton} from "../style";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { signInRequest } from '../../../../../store/saga/type';

type Values = {
    email : string,
    password : string,
}

const FormSignIn = () => {
    const [value, setValue] = useState<Values>({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }

    const  dispatch = useDispatch();
    const DataForm = () => {
        console.log(value)
        const isValid = true;
        if(isValid) {
            dispatch(signInRequest(value))
            navigate('/')
        }
    }

    return (
        <>
            <InputForm
                label={'Email'}
                type={'email'}
                name={'email'}
                placeholder={'Your email'}
                value={value.email}
                onChange={handleChange}
                error
            />
            <InputForm
                label={'Password'}
                type={'password'}
                name={'password'}
                placeholder={'Your password'}
                value={value.password}
                onChange={handleChange}
                error
            />
            <Link to={'/recover-password'}>Forgot password?</Link>
            <RegButton onClick={DataForm}>Sign In</RegButton>
        </>
    );
};

export default FormSignIn;