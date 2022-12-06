import React from 'react';
import {HeaderBlock} from "./style";
import Burger from "./burger/Burger";
import Search from "./search";
import Login from './login';

const Header = () => {
    return (
        <HeaderBlock>
            <Burger/>
            <Search/>
            <Login/>
        </HeaderBlock>
    );
};

export default Header;