import React from 'react';
import {CardContent, CardImg, CardImgBlock, CardInfo, Date, HeadTitle, Other, SearchCardsBlock, Title} from "./style";
import {IPostResult, PostsArray} from "../../../../data/Posts";
import {useParams} from "react-router-dom";
import {IconBookmarkPoints} from "../../../other/iconBookmarkPoints";
import Likes from '../../../other/likes';

const SearchCards = () => {
    const params = useParams();
    const paramsValue = params.value;

    let ResultSearch: IPostResult[];

    if(paramsValue){
       ResultSearch = PostsArray.results.filter(e => e.title.toLowerCase().includes(paramsValue.toLowerCase()))
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
                        <CardInfo>
                            <Date>
                                {card.date}
                            </Date>
                            <Title>
                                {card.title}
                            </Title>
                        </CardInfo>
                    </CardContent>
                    <Other>
                        <Likes likesAmount={card.lesson_num}></Likes>
                        <IconBookmarkPoints/>
                    </Other>
                </SearchCardsBlock>)}
        </>
    );
};

export default SearchCards;