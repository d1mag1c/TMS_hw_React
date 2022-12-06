import React from 'react';
import {FullName, IconUser, InitialsBlock, LoginBlock, WrapperUser} from "./style";
import {useUserSelector} from "../../../store";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const user = useUserSelector(state => state.authReducer.user?.username)
    const navigate = useNavigate()

    let userInitials: string = '';
    if (user) {
        user.split(' ' || '_').filter((e) => userInitials += e[0].toUpperCase())
    }

    return (
        <LoginBlock onClick={() => navigate('/registration')}>
            {user ?
                <WrapperUser>
                    <InitialsBlock>
                        {userInitials}
                    </InitialsBlock>
                    <FullName>{user}</FullName>
                </WrapperUser>
                : <IconUser/>}
        </LoginBlock>
    );
};

export default Login;