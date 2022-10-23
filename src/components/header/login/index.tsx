import React, {useState} from 'react';
import {IconUser, LoginBlock} from "./style";
import Registration from "./registration";

const Index = () => {
    const [registry, setRegistry] = useState(false);
    const RegState = () => {
        setRegistry(state => !state)
    }

    return (
        <>
            <LoginBlock onClick={RegState}>
                {/*<Initials/>*/}
                {/*{<UserBlock>{UserObj[0].user}</UserBlock>}*/}
                <IconUser/>

            </LoginBlock>
            {registry && <Registration/>}
        </>
    );
};

export default Index;