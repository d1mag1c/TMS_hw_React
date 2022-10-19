import React from 'react';
import {
    SmallCardBlock,
    SmallCardContent,
    SmallCardDate,
    SmallCardImageBlock, SmallCardImg,
    SmallCardTitle
} from "./style";
import {PostsArray} from "../../../../../data/Posts";
import Likes from "../../../../forAll/likes";
import {IconBookmarkPoints} from "../../../../../iconBookmarkPoints";


const SmallCard = () => {
    return (
        <>
            {PostsArray.results.slice(11, 20).map(e =>
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