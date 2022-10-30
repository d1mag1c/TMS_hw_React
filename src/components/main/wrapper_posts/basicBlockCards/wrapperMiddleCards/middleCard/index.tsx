import React from 'react';
import {MiddleCardBlock, MiddleCardDate, MiddleCardImage, MiddleCardOther, MiddleCardTitle} from "./style";
import {IconBookmarkPoints} from '../../../../../other/iconBookmarkPoints';
import Likes from "../../../../../other/likes";
import {PostsArray} from '../../../../../../data/Posts';
import {useNavigate} from "react-router-dom";

const MiddleCard = () => {
    const navigate = useNavigate()

    const OpenCard = (id:number) => {
        navigate('/page', {
            state: {
                id,
            }
        });
    }

    return (
        <>
            {PostsArray.results.slice(1, 7).map((e) =>
                <MiddleCardBlock key={e.id}>
                    <MiddleCardImage src={e.image}/>
                    <MiddleCardDate>{e.date}</MiddleCardDate>
                    <MiddleCardTitle onClick={() => OpenCard(e.id)}>{e.title}</MiddleCardTitle>
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