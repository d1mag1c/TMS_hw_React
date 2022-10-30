import React from 'react';
import {Blog, BlogTabs} from "./style";
import Index from "./tabs";
import WrapperPosts from "./wrapper_posts";


const BlockMain = () => {

    return (
        <>
            <BlogTabs>
                <Blog>Blog</Blog>
                <Index/>
            </BlogTabs>
            <WrapperPosts />
        </>
    );
};

export default BlockMain;