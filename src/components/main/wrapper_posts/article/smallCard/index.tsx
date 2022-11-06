import React, {FC} from 'react';
import {
    SmallCardBlock,
    SmallCardContent,
    SmallCardDate,
    SmallCardImageBlock, SmallCardImg,
    SmallCardTitle
} from "./style";

import {itemsProps} from "../../index";
import { IconBookmarkPoints } from '../../../../other/iconBookmarkPoints';
import Likes from "../../../../other/likes";
import {Link} from "react-router-dom";

type SmallCardProps = {
    items: itemsProps[]
}

const SmallCard: FC<SmallCardProps> = ({items}) => {

    return (
        <>
            {items.slice(0, 7).map((e) =>
                <SmallCardBlock key={e.id}>
                    <SmallCardContent>
                        <SmallCardDate>{e.date}</SmallCardDate>
                       <Link to={`/post/${e.id}`}
                             onClick={() => window.scrollTo(0, 0)}>
                           <SmallCardTitle>{e.title}</SmallCardTitle>
                       </Link>
                        <Likes likesAmount={e.lesson_num}/>
                    </SmallCardContent>
                    <SmallCardImageBlock>
                        <SmallCardImg src={e.image}/>
                        <IconBookmarkPoints/>
                    </SmallCardImageBlock>
                </SmallCardBlock>
            )}
        </>
    )
        ;
};

export default SmallCard;