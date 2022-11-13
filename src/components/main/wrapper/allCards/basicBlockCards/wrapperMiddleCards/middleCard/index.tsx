import React from 'react';
import {MiddleCardBlock, MiddleCardDate, MiddleCardImage, MiddleCardOther, MiddleCardTitle} from "./style";
import {Link} from "react-router-dom";
import { useAppSelector } from '../../../../../../../store';
import Likes from '../../../../../../other/likes';
import { IconBookmarkPoints } from '../../../../../../other/iconBookmarkPoints';

const MiddleCard = () => {

    const postsArray = useAppSelector(state => state.postReducer.posts)

    return (
        <>
            {postsArray.slice(1, 7).map((e) =>
                <MiddleCardBlock key={e.id}>
                    <MiddleCardImage src={e.image}/>
                    <MiddleCardDate>{e.date}</MiddleCardDate>
                    <Link to={`/post/${e.id}`} onClick={() => window.scrollTo(0, 0)}>
                        <MiddleCardTitle>{e.title}</MiddleCardTitle>
                    </Link>
                    <MiddleCardOther>
                        <Likes likesAmount={e.lesson_num}/>
                        <IconBookmarkPoints id={e.id}/>
                    </MiddleCardOther>
                </MiddleCardBlock>
            )}
        </>
    );
};

export default MiddleCard;