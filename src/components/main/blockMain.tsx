import React from 'react';
import {Blog, BlogTabs} from "./style";
import Tabs from "./tabs/Tabs";
import WrapperPosts from "./wrapper_posts";

const BlockMain = () => {
    return (
        <>
            <BlogTabs>
                <Blog>Blog</Blog>
                <Tabs/>
            </BlogTabs>
            <WrapperPosts/>
        </>
    );
};

export default BlockMain;