import React from 'react';
import {LikeIcon, LikesBlock, LikesP} from "./style";
import {DisLike, Like} from "./like";

type ILikes = {
    likesAmount?: number
}
const Likes = (props:ILikes) => {
    return (
        <LikesBlock>
            <LikeIcon><Like viewBox={"0 0 22 23"}/></LikeIcon>
            <LikesP>{props.likesAmount}</LikesP>
            <LikeIcon><DisLike viewBox={"0 0 22 23"}/></LikeIcon>
        </LikesBlock>
    );
};

export default Likes;