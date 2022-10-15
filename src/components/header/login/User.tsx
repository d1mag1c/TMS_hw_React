import React from 'react';
import {UserBlock} from "./style";
import {UserObj} from "../../../data/Data";

const User = () => {
    return (
        <>
            {<UserBlock>{UserObj[0].user}</UserBlock>}
        </>
    );
};

export default User;