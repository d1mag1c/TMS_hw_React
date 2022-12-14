import React from 'react';
import {
    SmallCardBlock,
    SmallCardContent,
    SmallCardDate,
    SmallCardImageBlock, SmallCardImg,
    SmallCardTitle
} from "./style";
import {Link} from "react-router-dom";
import { useAppSelector } from '../../../../../../store';
import Likes from '../../../../../other/likes';
import { IconBookmarkPoints } from '../../../../../other/iconBookmarkPoints';


const SmallCard = () => {

    const postsArray = useAppSelector(state => state.postReducer.posts)

    return (
        <>
            {postsArray.slice(7, 14).map((e) =>
                <SmallCardBlock key={e.id}>
                    <SmallCardContent>
                        <SmallCardDate>{e.date}</SmallCardDate>
                       <Link to={`/post/${e.id}`}
                             onClick={() => window.scrollTo(0, 0)}>
                           <SmallCardTitle>{e.title}</SmallCardTitle>
                       </Link>
                        <Likes likesAmount={e.lesson_num}/>
                    </SmallCardContent>
                    <SmallCardImageBlock>
                        <SmallCardImg src={e.image}/>
                        <IconBookmarkPoints id={e.id}/>
                    </SmallCardImageBlock>
                </SmallCardBlock>
            )}
        </>
    )
        ;
};

export default SmallCard;