import React from 'react';
import {SuccessForm, Text} from "./style";
import {RegButton} from "../style";

const FormRegSuccess = () => {
    return (
        <SuccessForm>
            <Text>
                <p>Email confirmed.</p>
                <p>Your registration is now completed</p>
            </Text>
            <RegButton>Go to home</RegButton>
        </SuccessForm>
    );
};

export default FormRegSuccess;