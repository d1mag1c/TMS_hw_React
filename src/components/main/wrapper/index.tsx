import React, {useEffect, useState} from 'react';
import { MainProps } from '..';
import { BlogTabs } from '../style';
import { Blog, LoaderSpinner } from './style';
import Tabs from './tabs';
import {useDispatch} from "react-redux";
import {addPosts} from "../../../store/postsReducer/action";

const Wrapper = ({children}: MainProps) => {

    const dispatch = useDispatch();
    const [state, setState] = useState(true)
    useEffect(() => {
        if(state){
            fetch('https://script.googleusercontent.com/macros/echo?user_content_key=79399UCdJ6gikymyDattTEhlFIBjZPAYvHjUl7---qOySJxaZXqH2_VWxJfCxlsuulfOT9B8e8xo3wDUNAQ7G1ByWRMVEIb3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM144pG9QZY38hPvy-JbSCRqBsgDHE57l3LU8QQuD8fMsV1dUhqgrP19fsn7jx8riV2WSjZN4MYW0CEtcaEpzgekW0XI0e3XuNz9Jw9Md8uu&lib=MXll1Do7noCASgJWueOaIITi98K7VbvaB')
                .then(response => response.json())
                .then(data => {
                    dispatch(addPosts(data))
                    setState(false)
                })
        }
    },)

    return (
        <>
            <BlogTabs>
                <Blog>Blog</Blog>
                <Tabs/>
            </BlogTabs>
            {!state ? children : <LoaderSpinner/>}
        </>
    );
};

export default Wrapper;