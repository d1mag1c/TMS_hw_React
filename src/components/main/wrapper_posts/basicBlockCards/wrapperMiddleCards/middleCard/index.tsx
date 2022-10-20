import React from 'react';
import {MiddleCardBlock, MiddleCardDate, MiddleCardImage, MiddleCardOther, MiddleCardTitle} from "./style";
import {PostsArray} from "../../../../../../data/Posts";
import Likes from "../../../../../likes";
import {IconBookmarkPoints} from "../../../../../../iconBookmarkPoints";

const MiddleCard = () => {
    return (
        <>
            {PostsArray.results.slice(1, 10).map((e) =>
                <MiddleCardBlock key={e.id}>
                    <MiddleCardImage src={e.image}/>
                    <MiddleCardDate>{e.date}</MiddleCardDate>
                    <MiddleCardTitle>{e.title}</MiddleCardTitle>
                    <MiddleCardOther>
                        <Likes likesAmount={e.lesson_num}/>
                        <IconBookmarkPoints/>
                    </MiddleCardOther>
                </MiddleCardBlock>
            )}
        </>
    );
};

export default MiddleCard;