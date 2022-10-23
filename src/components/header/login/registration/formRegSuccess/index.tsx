import React from 'react';
import {RegSuccessBlock, RegText} from "./style";
import {RegistryFormButton} from "../formRegistry/style";

const FormRegSuccess = () => {
    return (
        <RegSuccessBlock>
            <RegText>
                <p>Email confirmed.</p>
                <p>Your registration is now completed</p>
            </RegText>
            <RegistryFormButton>Go to home</RegistryFormButton>
        </RegSuccessBlock>
    );
};

export default FormRegSuccess;