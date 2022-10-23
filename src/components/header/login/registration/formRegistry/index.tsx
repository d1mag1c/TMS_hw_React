import React, {useState} from 'react';
import {
    RegistryForm, RegistryFormButton,
    RegistryFormInput,
    RegistryFormLabel,
    RegistryFormLink,

} from "./style";

// type Values = {
//     email : string,
//     password : string,
// }

const FormRegistry = () => {
    const [value, setValue] = useState<any>({
        email: "",
        password: "",
    })

    const [error, setError] = useState(false)
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>):void => {
        setValue(e.target.value);
    }
    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value.length < 6 ? setError(true) : setError(false)
    }
    return (
        <RegistryForm>
            <RegistryFormLabel>Email</RegistryFormLabel>
            <RegistryFormInput
                type={'text'}
                placeholder={'Your email'}
                value={value.email}
                error={error}
                onChange={handleChange}
                onBlur={validateValue}
            />
            <RegistryFormLabel>Password</RegistryFormLabel>
            <RegistryFormInput
                type={'password'}
                placeholder={'Your password'}
                value={value.password}
                error={error}
                onChange={handleChange}
                onBlur={validateValue}
            />
            <RegistryFormLink>Forgot password?</RegistryFormLink>
            <RegistryFormButton>Sign In</RegistryFormButton>
            <RegistryFormLink>Don’t have an account? <span>Sign Up</span></RegistryFormLink>
        </RegistryForm>
    );
};

export default FormRegistry;