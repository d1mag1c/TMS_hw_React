import React, {useState} from 'react';
import {TabsBlock, TabsList, TabsLi, BorderTab} from "./style";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1)
    const TabUse = (index: number) => {
        setToggleState(index)
    }
    return (
        <TabsBlock>
            <TabsList>
                <TabsLi
                    onClick={() => TabUse(1)}>
                    All
                    {toggleState === 1 ? <BorderTab/> : ''}
                </TabsLi>
                <TabsLi
                    onClick={() => TabUse(2)}>
                    My favorites
                    {toggleState === 2 ? <BorderTab/> : ''}
                </TabsLi>
                <TabsLi
                    onClick={() => TabUse(3)}>
                    Popular
                    {toggleState === 3 ? <BorderTab/> : ''}
                </TabsLi>
            </TabsList>
        </TabsBlock>
    );
};

export default Tabs;