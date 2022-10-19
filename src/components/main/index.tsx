import React from 'react';
import {Blog, BlogTabs, MainBlock} from "./style";
import Tabs from "./tabs/Tabs";
import Wrapper_posts from "./wrapper_posts";

const Main = () => {
    return (
        <MainBlock>
            <BlogTabs>
                <Blog>Blog</Blog>
                <Tabs/>
            </BlogTabs>
            <Wrapper_posts />
        </MainBlock>
    );
};

export default Main;