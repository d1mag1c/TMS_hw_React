import React from 'react';
import {HeaderBlock} from "./style";
import Burger from "./burger/Burger";
import InputSearch from "./inputSearch/InputSearch";
import ButtonSearch from "./buttonSearch/ButtonSearch";
import Login from "./login/Login";

const Header = () => {
    return (
        <HeaderBlock>
            <Burger />
            <InputSearch />
            <ButtonSearch />
            <Login />
        </HeaderBlock>
    );
};

export default Header;