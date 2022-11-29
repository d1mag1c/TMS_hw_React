import React, {useEffect, useState} from 'react';
import {
    CardContent,
    CardImg,
    CardImgBlock,
    CardInfoBlock,
    Date,
    FavoritesCardsBlock, Other, Title
} from "../main/wrapper/favorites/style";
import {Link} from "react-router-dom";
import Likes from "../other/likes";
import {IconBookmarkPoints} from "../other/iconBookmarkPoints";
import {CardInfo} from "../../store/postsReducer/type";
import {PaginationBlock} from "./reactPagination";

const LIMIT_RANGE = 20;

const Pagination = () => {
    const getPosts = (offset: number) => {
        return fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT_RANGE}${offset ? ('&offset=' + offset) : ''}`)
            .then(response => response.json())
    }
    const [posts, setPosts] = useState<CardInfo[]>([])
    // const [error, setError] = useState();
    const [count, setCount] = useState();
    const [offset, setOffset] = useState(0)

    const handlePageClick = (e: { selected: number }) => {
        setOffset(LIMIT_RANGE * e.selected)
    }

    useEffect(() => {
        getPosts(offset)
            .then(data => {
                setCount(data.count)
                setPosts(data.results)
            })
        // .catch(error => {
        //     setError(error.massage)
        // })
    }, [offset])

    // if(error) {
    //     return <h1>{error}</h1>
    // }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=20&search=${e.target.value}`)
            .then(response => response.json())
            .then(data => setPosts(data.results))
    };

    return (
        <>
            <input type="text" onChange={handleInput}/>
            {posts.map((card) =>
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
            <PaginationBlock count={count} handlePageClick={handlePageClick}/>
        </>
    );
};

export default Pagination;