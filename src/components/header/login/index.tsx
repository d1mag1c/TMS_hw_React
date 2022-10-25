import React, {useState} from 'react';
import {IconUser, LoginBlock} from "./style";
import {Link} from "react-router-dom";

const Index = () => {
    const [registry, setRegistry] = useState(false);
    const RegState = () => {
        setRegistry(state => !state)
    }

    return (
        <>
            <Link onClick={RegState}  to={registry ? '/' : '/registration' }>
                <LoginBlock >
                    {/*<Initials/>*/}
                    {/*{<UserBlock>{UserObj[0].user}</UserBlock>}*/}
                    <IconUser/>
                </LoginBlock>
            </Link>
        </>
    );
};

export default Index;