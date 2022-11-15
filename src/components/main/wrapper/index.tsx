import React from 'react';
import {BlogTabs} from '../style';
import {Blog, LoaderSpinner} from './style';
import {GetAllPosts} from "../../../data/getAllPosts";
import Tabs from './tabs';
import {Outlet} from "react-router-dom";

const Wrapper = () => {

    const getPosts = GetAllPosts();

    return (
        <>
            <BlogTabs>
                <Blog>Blog</Blog>
                <Tabs/>
            </BlogTabs>
            {!getPosts.state ? <Outlet />: <LoaderSpinner/>}
        </>
    );
};

export default Wrapper;