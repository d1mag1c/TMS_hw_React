import React from 'react';
import {CardContent, CardImg, CardImgBlock, Date, CardInfoBlock, FavoritesCardsBlock,Title, Other} from './style';
import {Link} from "react-router-dom";
import { useAppSelector } from '../../../../store';
import Likes from "../../../other/likes";
import {IconBookmarkPoints} from "../../../other/iconBookmarkPoints";

const Favorites = () => {

    const favoritesArray = useAppSelector(state => state.postReducer)
    const favoritesFilterArray = favoritesArray.posts.filter(card => favoritesArray.idFavorite.find(e => e === card.id))

    return (
        <>
            {favoritesFilterArray.map((card) =>
                <FavoritesCardsBlock key={card.id}>
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
                                <Title>
                                    {card.title}
                                </Title>
                            </Link>
                        </CardInfoBlock>
                    </CardContent>
                    <Other>
                        <Likes likesAmount={card.lesson_num}></Likes>
                        <IconBookmarkPoints id={card.id}/>
                    </Other>
                </FavoritesCardsBlock>)}
        </>
    );
};

export default Favorites;