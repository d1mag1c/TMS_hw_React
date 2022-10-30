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
                        <SmallCardTitle>{e.title}</SmallCardTitle>
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