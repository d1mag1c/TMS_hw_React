import React from 'react';
import {
    BigCardBlock,
    BigCardContent,
    BigCardDate,BigCardImage,
    BigCardImageBlock,
    BigCardText,
    BigCardTitle
} from "./style";
import {Link} from "react-router-dom";
import { useAppSelector } from '../../../../../../store';
import Likes from '../../../../../other/likes';
import { IconBookmarkPoints } from '../../../../../other/iconBookmarkPoints';

const BigCard = () => {
    const postsArray = useAppSelector(state => state.postReducer.posts[0])

    return (
        <BigCardBlock>
            <BigCardContent>
                <BigCardDate>{postsArray.date}</BigCardDate>
                <Link to={`/post/${postsArray.id}`}
                      onClick={() => window.scrollTo(0, 0)}>
                    <BigCardTitle id={String(postsArray.id)}>
                    {postsArray.title}
                </BigCardTitle>
                </Link>
                <BigCardText>{postsArray.text}</BigCardText>
                <Likes likesAmount={postsArray.lesson_num}/>
            </BigCardContent>
            <BigCardImageBlock>
                <BigCardImage src={postsArray.image}></BigCardImage>
                    <IconBookmarkPoints id={postsArray.id}/>
            </BigCardImageBlock>
        </BigCardBlock>
    );
};

export default BigCard;