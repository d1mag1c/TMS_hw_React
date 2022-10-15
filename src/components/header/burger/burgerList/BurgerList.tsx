import React from 'react';
import {BurgerListBlock, BurgerListUl, BurgerListLi} from "./style";
import {UserObj} from "../../../../data/Data";
import {findInitials} from "../../login/Initials";
import {InitialsBlock, LoginBlock} from "../../login/style";

const BurgerList = () => {
    return (
        <BurgerListBlock>
            <BurgerListUl>
                {UserObj.map((e, index) =>
                    <BurgerListLi key={index}>
                        <InitialsBlock>
                            {findInitials(e.user.toString())}
                        </InitialsBlock>
                        {e.user}
                    </BurgerListLi>)}
            </BurgerListUl>
        </BurgerListBlock>
    );
};

export default BurgerList;