import React, {useState} from 'react';
import InputForm from "../InputForm";

// type Values = {
//     email : string,
//     password : string,
// }

const FormSignIn = () => {
    const [value, setValue] = useState<any>({
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    return (
        <>
            <InputForm
                label={'Email'}
                type={'email'}
                placeholder={'Your email'}
                value={value.email || undefined}
                onChange={handleChange}
                error
            />
            <InputForm
                label={'Password'}
                type={'password'}
                placeholder={'Your password'}
                value={value.password || undefined}
                onChange={handleChange}
                error
            />
            <p>Forgot password?</p>
        </>
    );
};

export default FormSignIn;