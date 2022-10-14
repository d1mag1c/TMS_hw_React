import React from 'react';
import {LoginBlock} from "./style";
import Initials from "./Initials";
import User from "./User";

const Login = () => {
    return (
        <LoginBlock>
            <Initials/>
            <User />
        </LoginBlock>
    );
};

export default Login;