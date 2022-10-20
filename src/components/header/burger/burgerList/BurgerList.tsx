import React from 'react';
import {BurgerListBlock, BurgerListLi, BurgerListUl, IconSunMoonBlock} from "./style";
import {UserObj} from "../../../../data/Data";
import {findInitials} from "../../login/Initials";
import {InitialsBlock} from "../../login/style";
import {MoonIcon, SunIcon} from "./iconSunMoon";

const BurgerList = () => {
    return (
        <BurgerListBlock>
            <BurgerListUl>
                <BurgerListLi bg white>
                    <InitialsBlock>
                        {findInitials(UserObj[0].user.toString())}
                    </InitialsBlock>
                    {UserObj[0].user}
                </BurgerListLi>
                <BurgerListLi>Home</BurgerListLi>
                <BurgerListLi>Add Post</BurgerListLi>
                <BurgerListLi>
                    <IconSunMoonBlock><SunIcon/></IconSunMoonBlock>
                    <IconSunMoonBlock><MoonIcon/></IconSunMoonBlock>
                </BurgerListLi>
                <BurgerListLi>Log Out</BurgerListLi>
            </BurgerListUl>
        </BurgerListBlock>
    );
};

export default BurgerList;