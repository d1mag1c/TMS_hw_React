import React, {useState} from 'react';
import {BurgerMenu, BurgerPosition} from "./style";
import BurgerList from "./burgerList/BurgerList";

const Burger = () => {
    const [open, openBurger] = useState(false)
    return (
        <BurgerPosition>
            <BurgerMenu
                onClick={() => openBurger(state => !state)}
                symbol={open ? '\\2716' : '\\2630'}
            >
            </BurgerMenu>
            {open && <BurgerList/>}
        </BurgerPosition>
    );
};

export default Burger;