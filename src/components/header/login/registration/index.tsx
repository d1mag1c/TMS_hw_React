import React, {useState} from 'react';
import { RegistryBlock, RegistryTitle } from './style';
import FormRegistry from "./formRegistry";
import FormRegSuccess from "./formRegSuccess";

const Registration = () => {
    const [reg, setReg] = useState(false)
    return (
        <RegistryBlock>
            <RegistryTitle>
                <p>Back to home</p>
                <h1>{reg ? 'Success' : 'Sign In'}</h1>
            </RegistryTitle>
            {reg ? <FormRegSuccess/> : <FormRegistry/>}
            <button onClick={() => setReg(state => !state)}>Форма подтверждения почты</button>
        </RegistryBlock>
    );
};

export default Registration;