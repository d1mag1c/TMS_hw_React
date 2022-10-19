import React from 'react';
import {
    BigCardBlock,
    BigCardContent,
    BigCardDate,BigCardImage,
    BigCardImageBlock,
    BigCardText,
    BigCardTitle
} from "./style";
import {PostsArray} from "../../../../../data/Posts";
import Likes from "../../../../forAll/likes";
import {IconBookmarkPoints} from "../../../../../iconBookmarkPoints";

const BigCard = () => {
    return (
        <BigCardBlock>
            <BigCardContent>
                <BigCardDate>{PostsArray.results[0].date}</BigCardDate>
                <BigCardTitle>{PostsArray.results[0].title}</BigCardTitle>
                <BigCardText>{PostsArray.results[0].text}</BigCardText>
                <Likes likesAmount={PostsArray.results[0].lesson_num}/>
            </BigCardContent>
            <BigCardImageBlock>
                <BigCardImage src={PostsArray.results[0].image}></BigCardImage>
                    <IconBookmarkPoints/>
            </BigCardImageBlock>
        </BigCardBlock>
    );
};

export default BigCard;