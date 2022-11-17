import React from 'react';
import {useAppSelector} from "../../../../store";
import {
    CardContent,
    CardImg,
    CardImgBlock,
    CardInfoBlock,
    Date,
    FavoritesCardsBlock,
    Other,
    Title
} from "../favorites/style";
import {Link} from "react-router-dom";
import Likes from "../../../other/likes";
import {IconBookmarkPoints} from "../../../other/iconBookmarkPoints";

const Popular = () => {

    const postsArray = useAppSelector(state => state.postReducer.posts)
    const postsArraySort = postsArray.map(e => e)
        .sort((a, b) => b.lesson_num - a.lesson_num)
        .slice(0,10);

    return (
        <>
            {postsArraySort.map((card) =>
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

export default Popular;