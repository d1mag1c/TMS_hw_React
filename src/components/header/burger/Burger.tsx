import React, {useState} from 'react';
import {BurgerList} from './burgerList/BurgerList';
import {BurgerMenu, BurgerModal} from "./style";
import {BurgerListBlock} from "./burgerList/style";


const Burger = () => {
    const [open, setOpen] = useState(false)
    const DisplayBurger = () => {
        setOpen(state => !state)
    }
const closeBurger = () => {
   setOpen(false)
}

    return (
        <>
            <BurgerMenu
                onClick={DisplayBurger}
                symbol={open ? '\\2716' : '\\2630'}>
            </BurgerMenu>
            <BurgerListBlock show={open} onClick={closeBurger}><BurgerList/></BurgerListBlock>
            {open && <BurgerModal onClick={closeBurger}/>}
        </>
    );
};

export default Burger;