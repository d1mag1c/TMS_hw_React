import React from 'react';
import {TabsBlock, TabsList, TabsLi} from "./style";
import {useNavigate, useParams} from "react-router-dom";
import {BorderTab} from "./style";

const Tabs = () => {
    const params = useParams();
    const paramsTab = Object.values(params)[0];
    const navigate = useNavigate();

    const TabAll = () => {
        navigate('/')
    }
    const TabFavorites = () => {
        navigate('/favorites')
    }

    return (
        <TabsBlock>
            <TabsList>
                <TabsLi
                    onClick={TabAll}>
                    All
                    {paramsTab === undefined ? <BorderTab/> : null}
                </TabsLi>
                <TabsLi
                    onClick={TabFavorites}>
                    My favorites
                    {paramsTab === 'favorites' ? <BorderTab/> : null}
                </TabsLi>
                <TabsLi>
                    Popular
                    {paramsTab === 'popular' ? <BorderTab/> : null}
                </TabsLi>
            </TabsList>
        </TabsBlock>
    );
};

export default Tabs;