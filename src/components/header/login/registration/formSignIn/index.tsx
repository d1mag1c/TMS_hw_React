import React, {useState} from 'react';
import {Label} from '../style';
import {Input, Link} from "./style";

// type Values = {
//     email : string,
//     password : string,
// }

const FormSignIn = () => {
    const [value, setValue] = useState<any>({
        email: "",
        password: "",
    })

    const [error, setError] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }
    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value.length < 6 ? setError(true) : setError(false)
    }
    return (
        <>
            <Label>Email</Label>
            <Input
                type={'text'}
                placeholder={'Your email'}
                value={value.email}
                error={error}
                onChange={handleChange}
                onBlur={validateValue}
            />
            <Label>Password</Label>
            <Input
                type={'password'}
                placeholder={'Your password'}
                value={value.password}
                error={error}
                onChange={handleChange}
                onBlur={validateValue}
            />
            <Link>Forgot password?</Link>

        </>

    );
};

export default FormSignIn;