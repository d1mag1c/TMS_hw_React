import React from 'react';
import {WrapperPostsBlock} from './style';
import BasicBlockCards from "./basicBlockCards";
import Article from "./article";

const WrapperPosts = () => {
    return (
        <WrapperPostsBlock>
            <BasicBlockCards></BasicBlockCards>
            <Article></Article>
        </WrapperPostsBlock>
    );
};

export default WrapperPosts;