import React from 'react';
import {Input} from './style';
import {Label} from "../style";

const FormSignUp = () => {
    return (
        <>
            <Label>Name</Label>
            <Input></Input>
            <Label>Email</Label>
            <Input></Input>
            <Label>Password</Label>
            <Input></Input>
            <Label>Confirm password</Label>
            <Input></Input>
        </>
    );
};

export default FormSignUp;