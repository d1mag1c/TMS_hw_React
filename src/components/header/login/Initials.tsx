import React from 'react';
import {InitialsBlock} from "./style";
import {UserObj} from "../../../data/Data";

export function findInitials(user: string): string {

    let UserInitials: string = '';
    user.split(' ').filter((e) => UserInitials += e[0])
    return UserInitials.toUpperCase()
}

const Initials = () => {

    return (
        <InitialsBlock>
            {findInitials(UserObj[0].user)}
        </InitialsBlock>
    );
};

export default Initials;