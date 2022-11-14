import React, {FC} from 'react';
import {BookmarkPointsBlock, IconWrapper} from "./style";
import {FavoriteIcon} from '../favoriteIcon';
import {FavoriteHook} from "../../../hooks/favoriteHook";
import {PointsIcon} from "../PointsIcon";

type IdType = {
    id: number
}

export const IconBookmarkPoints: FC<IdType> = ({id}) => {

    const toggleIcon = FavoriteHook(id)

    return (
        <BookmarkPointsBlock>
            <IconWrapper onClick={toggleIcon.addId}>
                <FavoriteIcon state={toggleIcon.state}/>
            </IconWrapper>
            <PointsIcon/>
        </BookmarkPointsBlock>
    )
}