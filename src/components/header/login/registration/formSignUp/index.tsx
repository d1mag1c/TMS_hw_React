import React, {useState} from 'react';
import InputForm from "../InputForm";

// type Values = {
//     name: string,
//     email : string,
//     password : string,
// }

const FormSignUp = () => {
    const [value, setValue] = useState<any>({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    return (
        <>
            <InputForm
                label={'Name'}
                type={'text'}
                placeholder={'Your name'}
                value={value.name || undefined}
                error
                onChange={handleChange}/>
            <InputForm
                label={'Email'}
                type={'email'}
                placeholder={'Your email'}
                value={value.email || undefined}
                error
                onChange={handleChange}/>
            <InputForm
                label={'Password'}
                type={'password'}
                placeholder={'Your password'}
                value={value.password || undefined}
                error
                onChange={handleChange}/>
            <InputForm
                label={'PasswordConfirm'}
                type={'password'}
                placeholder={'Confirm password'}
                value={value.passwordConfirm || undefined}
                error
                onChange={handleChange}/>
        </>
    );
};

export default FormSignUp;