import React from 'react';
import {BlockImg, Img, PageBlock, TextContent, Title} from "./style";
import {useParams} from "react-router-dom";
import {PostsArray} from "../../data/Posts";

const PageSelected = () => {
    const params = useParams();
    const cardId = params.id;
    const findCard = PostsArray.results.find(e => e.id === Number(cardId))

    return (
        <>
                <PageBlock>
                    <Title>{findCard?.title}</Title>
                    <BlockImg>
                        <Img src={findCard?.image}/>
                    </BlockImg>
                    <TextContent>{findCard?.text}</TextContent>
                </PageBlock>
        </>
    );
};

export default PageSelected;