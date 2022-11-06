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
import { IconBookmarkPoints } from '../../../../other/iconBookmarkPoints';
import Likes from "../../../../other/likes";
import {Link} from "react-router-dom";


const BigCard = () => {
    return (
        <BigCardBlock>
            <BigCardContent>
                <BigCardDate>{PostsArray.results[0].date}</BigCardDate>
                <Link to={`/post/${PostsArray.results[0].id}`}
                      onClick={() => window.scrollTo(0, 0)}>
                    <BigCardTitle id={String(PostsArray.results[0].id)}>
                    {PostsArray.results[0].title}
                </BigCardTitle>
                </Link>
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