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
import {Link, useNavigate} from "react-router-dom";
import Likes from "../../../other/likes";
import {IconBookmarkPoints} from "../../../other/iconBookmarkPoints";
import {CardInfo} from "../../../../store/postsReducer/type";
import {useSelector} from "react-redux";
import {useUserSelector} from "../../../../store";
import {RegButton} from "../../../header/login/registration/style";
import {ButtonAuthorization, TextAuthorization, WrapperBlock} from "./style";


const MyPosts = () => {

    const user = useUserSelector(state => state.authReducer.user)
    const [posts, setPosts] = useState<CardInfo[]>([])
    const navigation = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://studapi.teachmeskills.by/blog/posts/?author=${user.id}`)
                .then(response => response.json())
                .then(data => setPosts(data.results))
        }

    }, [user])
    console.log(user)

    return (
        <>
            {user ? posts.map((card) =>
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
                    </FavoritesCardsBlock>)
                :
                <WrapperBlock>
                    <TextAuthorization>Чтобы увидеть свои посты, пожалуйста, авторизуйтесь!</TextAuthorization>
                    <ButtonAuthorization
                        onClick={() => navigation('/registration')}>
                        Авторизация
                    </ButtonAuthorization>
                </WrapperBlock>
            }
        </>
    );
};

export default MyPosts;