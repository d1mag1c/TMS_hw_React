import React, {useEffect, useState} from 'react';
import {
    SmallCardBlock,
    SmallCardContent,
    SmallCardDate,
    SmallCardImageBlock, SmallCardImg,
    SmallCardTitle
} from "./style";
import Likes from "../../../../likes";
import {IconBookmarkPoints} from "../../../../../iconBookmarkPoints";

type itemsProps = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
}

// type ArrayOfBlogs = [itemsProps, ...itemsProps[]]

const SmallCard = () => {

    const [items, setItems] = useState<itemsProps[]>([])
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
            .then(response  => response.json())
            .then(data => setItems(data.results))
    }, [])
    return (
        <>
            {items.map(e =>
                <SmallCardBlock key={e.id}>
                    <SmallCardContent>
                        <SmallCardDate>{e.date}</SmallCardDate>
                        <SmallCardTitle>{e.title}</SmallCardTitle>
                        <Likes likesAmount={e.lesson_num}/>
                    </SmallCardContent>
                    <SmallCardImageBlock>
                        <SmallCardImg src={e.image}/>
                        <IconBookmarkPoints/>
                    </SmallCardImageBlock>
                </SmallCardBlock>
            )}

        </>
    )
        ;
};

export default SmallCard;