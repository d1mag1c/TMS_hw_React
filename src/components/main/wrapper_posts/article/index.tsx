import React, {FC} from 'react';
import {ArticleBlock} from "./style";
import {itemsProps} from '..';
import SmallCard from "./smallCard";

type ArticleItemsProps = {
    items: itemsProps[]
}

const Article: FC<ArticleItemsProps> = ({items}) => {
    return (
        <ArticleBlock>
            <SmallCard items={items}/>
        </ArticleBlock>
    );
};

export default Article;