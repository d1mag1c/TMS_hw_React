import React, {useEffect, useState} from 'react';
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
import {CardInfo} from "../../../../store/postsReducer/type";

const MyPosts = () => {
    const [posts, setPosts] = useState<CardInfo[]>([])
    useEffect(() => {
            fetch('https://studapi.teachmeskills.by/blog/posts/?author=5535')
                .then(response => response.json())
                .then(data => setPosts(data.results))
    },[])

    return (
        <>
            {posts && posts.map((card) =>
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

export default MyPosts;