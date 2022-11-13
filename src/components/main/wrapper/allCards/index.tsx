import React from 'react';
import BasicBlockCards from "./basicBlockCards";
import Article from "./article";
import { WrapperPostsBlock } from './style';


const WrapperPosts = () => {

    return (
        <>
            <WrapperPostsBlock>
                <BasicBlockCards></BasicBlockCards>
                <Article></Article>
            </WrapperPostsBlock>
        </>
    );
};

export default WrapperPosts;