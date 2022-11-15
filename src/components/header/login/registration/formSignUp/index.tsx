import React, {useState} from 'react';
import InputForm from "../InputForm";
import {RegButton} from "../style";
import {useDispatch} from "react-redux";
import {signUpRequest} from "../../../../../store/authReducer/action";

type Values = {
    username: string,
    email : string,
    password : string,
    // passwordConfirm?: string,
}

const FormSignUp = () => {
    const [value, setValue] = useState<Values>({
        username: '',
        email: '',
        password: '',
        // passwordConfirm: '',
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

    const dispatch = useDispatch();
    const DataForm = () => {
        dispatch(signUpRequest(value))
    }
    return (
        <>
            <InputForm
                label={'Name'}
                type={'text'}
                name={'username'}
                placeholder={'Your name'}
                value={value.username}
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
            {/*<InputForm*/}
            {/*    label={'PasswordConfirm'}*/}
            {/*    type={'password'}*/}
            {/*    name={'passwordConfirm'}*/}
            {/*    placeholder={'Confirm password'}*/}
            {/*    value={value.passwordConfirm}*/}
            {/*    error*/}
            {/*    onChange={handleChange}/>*/}
            <RegButton onClick={DataForm}>Sign Up</RegButton>
        </>
    );
};

export default FormSignUp;