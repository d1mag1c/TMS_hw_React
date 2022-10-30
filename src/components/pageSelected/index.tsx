import React from 'react';
import {BlockImg, Img, PageBlock, TextContent, Title} from "./style";
import {useLocation} from "react-router-dom";
import {PostsArray} from "../../data/Posts";

const PageSelected = () => {
    const location = useLocation()
    const IdCards = location.state.id
    const FindCard = PostsArray.results.find(e => e.id === IdCards)

    return (
        <>
                <PageBlock>
                    <Title>{FindCard?.title}</Title>
                    <BlockImg>
                        <Img src={FindCard?.image}/>
                    </BlockImg>
                    <TextContent>{FindCard?.text}</TextContent>
                </PageBlock>
        </>
    );
};

export default PageSelected;