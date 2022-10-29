import React from 'react';
import {HeaderBlock} from "./style";
import Burger from "./burger/Burger";
import Login from "./login";
import Search from "./search";

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