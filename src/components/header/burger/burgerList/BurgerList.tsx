import React from 'react';
import {BurgerListBlock, BurgerListUl, BurgerListLi} from "./style";
import Login from "../../login/Login";

const BurgerList = () => {
    return (
        <BurgerListBlock>
            <BurgerListUl>
                <BurgerListLi><Login /></BurgerListLi>
                <BurgerListLi> User 2</BurgerListLi>
                <BurgerListLi> User 3</BurgerListLi>
                <BurgerListLi> User 4</BurgerListLi>
            </BurgerListUl>
        </BurgerListBlock>

    );
};

export default BurgerList;