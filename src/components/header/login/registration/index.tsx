import React, {useState} from 'react';
import {ButtonTest, RegistryBlock, RegistryForm, RegistryTitle, TextAsk} from './style';
import FormRegSuccess from "./formSuccess";
import FormSignIn from './formSignIn';
import FormSignUp from "./formSignUp";
import {Link} from "react-router-dom";

const Registration = () => {
    const [success, setSuccess] = useState(false)
    const [reg, setReg] = useState(false)
    return (
        <RegistryBlock>
            <RegistryTitle>
                <Link to={'/'} >Back to home</Link>
                <h1>{reg ? 'Sign Up' : 'Sign In'}</h1>
            </RegistryTitle>
            <RegistryForm>
                {reg ? <FormSignUp/> : <FormSignIn/>}
                <TextAsk>
                    {reg ? 'Already have an account?' : 'Don’t have an account?'}
                    <span onClick={() => setReg(state => !state)}>{reg ? 'Sign In' : 'Sign Up'}</span>
                </TextAsk>
            </RegistryForm>

            <ButtonTest onClick={() => setSuccess(state => !state)}>Форма подтверждения почты</ButtonTest>
            {success && <FormRegSuccess/> }
        </RegistryBlock>
    );
};

export default Registration;