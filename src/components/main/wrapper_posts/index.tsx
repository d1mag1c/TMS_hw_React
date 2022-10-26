import React, {useEffect, useState} from 'react';
import {WrapperPostsBlock} from './style';
import BasicBlockCards from "./basicBlockCards";
import Article from "./article";

export type itemsProps = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
}

const WrapperPosts = () => {

    const [items, setItems] = useState<itemsProps[]>([])
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
            .then(response  => response.json())
            .then(data => setItems(data.results))
    }, [])

    return (
        <WrapperPostsBlock>
            <BasicBlockCards></BasicBlockCards>
            <Article items={items}></Article>
        </WrapperPostsBlock>
    );
};

export default WrapperPosts;