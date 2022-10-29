import React from 'react';
import {CardContent, CardImg, CardImgBlock, CardInfo, Date, HeadTitle, Other, SearchCardsBlock, Title} from "./style";
import {IPostResult} from "../../../../data/Posts";
import {useLocation} from "react-router-dom";
import {IconBookmarkPoints} from "../../../../iconBookmarkPoints";
import Likes from '../../../likes';


const SearchCards = () => {
    const location = useLocation()
    const Posts: IPostResult[] = location.state.ResultSearch

    return (
        <>
            <HeadTitle>{`Search results '${location.state.value}'`}</HeadTitle>
            {Posts.map((card, index) =>
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