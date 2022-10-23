import React from 'react';
import {HeaderBlock} from "./style";
import Burger from "./burger/Burger";
import InputSearch from "./inputSearch/InputSearch";
import ButtonSearch from "./buttonSearch/ButtonSearch";
import Index from "./login";

const Header = () => {
    return (
        <HeaderBlock>
            <Burger />
            <InputSearch />
            <ButtonSearch />
            <Index />
        </HeaderBlock>
    );
};

export default Header;