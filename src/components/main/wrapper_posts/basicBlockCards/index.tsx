import React from 'react';
import {BasicBlock} from "./style";
import BigCard from "./bigCard";
import WrapperMiddleCards from "./wrapperMiddleCards";

const BasicBlockCards = () => {
    return (
        <BasicBlock>
            <BigCard></BigCard>
            <WrapperMiddleCards/>
        </BasicBlock>
    );
};

export default BasicBlockCards;