import React from 'react';
import {
    BlockHomePost,
    BlockImg,
    FavoritesBlock,
    Icon,
    IconBlock,
    Img,
    LikesBlock,
    PageBlock,
    TextContent,
    Title
} from "./style";
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../store";
import {DisLike, Like} from '../other/likes/like';
import { FavoriteHook } from '../../hooks/favoriteHook';
import { FavoriteIcon } from '../other/favoriteIcon';



const PageSelected = () => {
    const params = useParams();
    const cardId = Number(params.id);
    const postsArray = useAppSelector(state => state.postReducer.posts)
    const findCard = postsArray.find(e => e.id === cardId)

    const toggleIcon = FavoriteHook(cardId)

    return (
        <>
            {findCard && <PageBlock>
                <BlockHomePost>
                    <Link to='/'>Home</Link><p><span>|</span> Post {findCard.id}</p>
                </BlockHomePost>

                <Title>{findCard.title}</Title>
                <BlockImg>
                    <Img src={findCard.image}/>
                </BlockImg>
                <TextContent>{findCard.text}</TextContent>
                <IconBlock>
                    <LikesBlock>
                        <Icon><Like/></Icon>
                        <Icon><DisLike/></Icon>
                    </LikesBlock>
                    <FavoritesBlock onClick={toggleIcon.addId}>
                        <FavoriteIcon state={toggleIcon.state}/>
                        {toggleIcon.state ? 'Remove from favorites' : 'Add to favorites'}
                    </FavoritesBlock>
                </IconBlock>
            </PageBlock>}
        </>
    );
};

export default PageSelected;