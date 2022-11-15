import React from 'react';
import {MainProps} from '..';
import {BlogTabs} from '../style';
import {Blog, LoaderSpinner} from './style';
import Tabs from './tabs';
import {GetAllPosts} from "../../../data/getAllPosts";

const Wrapper = ({children}: MainProps) => {

    const getPosts = GetAllPosts();

    return (
        <>
            <BlogTabs>
                <Blog>Blog</Blog>
                <Tabs/>
            </BlogTabs>
            {!getPosts.state ? children : <LoaderSpinner/>}
        </>
    );
};

export default Wrapper;