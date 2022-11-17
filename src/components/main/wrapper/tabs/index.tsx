import React from 'react';
import {TabsBlock, TabsList, TabsLi} from "./style";
import {useNavigate} from "react-router-dom";
import {BorderTab} from "./style";

const Tabs = () => {
    const pathName = window.location.pathname;
    const navigate = useNavigate();

    const TabAll = () => {
        navigate('/')
    }
    const TabFavorites = () => {
        navigate('/favorites',)
    }
    const TabPopular = () => {
        navigate('/popular')
    }

    return (
        <TabsBlock>
            <TabsList>
                <TabsLi
                    onClick={TabAll}>
                    All
                    {pathName === '/' ? <BorderTab/> : null}
                </TabsLi>
                <TabsLi
                    onClick={TabFavorites}>
                    My favorites
                    {pathName === '/favorites' ? <BorderTab/> : null}
                </TabsLi>
                <TabsLi
                    onClick={TabPopular}>
                    Popular
                    {pathName === '/popular' ? <BorderTab/> : null}
                </TabsLi>
            </TabsList>
        </TabsBlock>
    );
};

export default Tabs;