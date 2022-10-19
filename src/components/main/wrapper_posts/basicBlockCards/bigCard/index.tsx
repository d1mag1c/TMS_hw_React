import React from 'react';
import {
    BigCardBlock,
    BigCardContent,
    BigCardDate, BigCardImage,
    BigCardImageBlock,
    BigCardLikesBlock,
    BigCardText,
    BigCardTitle
} from "./style";
import {PostsArray} from "../../../../../data/Posts";

const BigCard = () => {
    return (
        <BigCardBlock>
            <BigCardContent>
                <BigCardDate>{PostsArray.results[0].date}</BigCardDate>
                <BigCardTitle>{PostsArray.results[0].title}</BigCardTitle>
                <BigCardText>{PostsArray.results[0].text}</BigCardText>
                <BigCardLikesBlock>{PostsArray.results[0].lesson_num}</BigCardLikesBlock>
            </BigCardContent>
            <BigCardImageBlock>
                <BigCardImage src={PostsArray.results[0].image}></BigCardImage>
            </BigCardImageBlock>
        </BigCardBlock>
    );
};

export default BigCard;