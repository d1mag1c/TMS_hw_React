import React from 'react';
import {CardContent, CardImg, CardImgBlock,CardInfoBlock, Date, HeadTitle, Other, SearchCardsBlock, Title} from "./style";
import {Link, useParams} from "react-router-dom";
import {IconBookmarkPoints} from "../../../other/iconBookmarkPoints";
import Likes from '../../../other/likes';
import {useAppSelector} from "../../../../store";
import { CardInfo } from '../../../../store/postsReducer/type';

const SearchCards = () => {
    const params = useParams();
    const paramsValue = params.value;

    let ResultSearch: CardInfo[];
    const postsArray = useAppSelector(state => state.postReducer.posts)
    if(paramsValue){

       ResultSearch = postsArray.filter(e => e.title?.toLowerCase().includes(paramsValue.toLowerCase()))
    } else ResultSearch = []

    return (
        <>
            <HeadTitle>{`Search results '${paramsValue}'`}</HeadTitle>
            {ResultSearch.map((card, index) =>
                < SearchCardsBlock key={index}>
                    < CardContent>
                        < CardImgBlock>
                            < CardImg src={card.image}/>
                        </CardImgBlock>
                        <CardInfoBlock>
                            <Date>
                                {card.date}
                            </Date>
                            <Link to={`/post/${card.id}`}
                                  onClick={() => window.scrollTo(0, 0)}>
                            <Title >
                                {card.title}
                            </Title>
                            </Link>
                        </CardInfoBlock>
                    </CardContent>
                    <Other>
                        <Likes likesAmount={card.lesson_num}></Likes>
                        <IconBookmarkPoints id={card.id}/>
                    </Other>
                </SearchCardsBlock>)}
        </>
    );
};

export default SearchCards;