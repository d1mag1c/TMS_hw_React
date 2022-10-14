import React from 'react';
import {InitialsBlock} from "./style";

type IUser = {
    user: string
}

const UserObj:IUser[] =
    [{
    user: 'Дима Зайцев'
}]

function findInitials (user:string):string {

    let UserInitials:string = '';
    user.split(' ').filter((e) => UserInitials += e[0])
    return UserInitials
}

const Initials = () => {

    const InitialsFunc = findInitials(UserObj[0].user);
    return (
        <InitialsBlock>{InitialsFunc}</InitialsBlock>
    );
};

export default Initials;