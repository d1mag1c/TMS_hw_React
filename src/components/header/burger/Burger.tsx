import React, {useState} from 'react';
import {BurgerList} from './burgerList/BurgerList';
import {BurgerMenu, BurgerModal} from "./style";
import {BurgerListBlock} from "./burgerList/style";


const Burger = () => {
    const [open, openBurger] = useState(false)
    const DisplayBurger = () => {
        openBurger(state => !state)
    }

    return (
        <>
            <BurgerMenu
                onClick={DisplayBurger}
                symbol={open ? '\\2716' : '\\2630'}
            >
            </BurgerMenu>
            <BurgerListBlock show={open}><BurgerList/></BurgerListBlock>
            {open && <BurgerModal onClick={() => openBurger(false)}/>}
        </>
    );
};

export default Burger;