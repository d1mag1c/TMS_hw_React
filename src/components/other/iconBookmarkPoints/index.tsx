import React, {FC} from 'react';
import {BookmarkPointsBlock} from "./style";
import {useAppSelector} from "../../../store";

const BookmarkIcon: FC<IdType> = ({id}) => {
    const favoritesIdArray = useAppSelector(state => state.postReducer.id)

    const addId = () => {

        favoritesIdArray.find(e => e === id)
            ? favoritesIdArray.splice(favoritesIdArray.indexOf(id), 1)
            : favoritesIdArray.push(id)
    }

    return (
        <svg width="16" height="20" viewBox="0 0 16 20" onClick={addId}>
            <path
                d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z"/>
        </svg>
    );
};

const PointsIcon = () => {
    return (
        <svg width="20" height="4" viewBox="0 0 20 4">
            <path
                d="M0 2C0 3.10267 0.897333 4 2 4C3.10267 4 4 3.10267 4 2C4 0.897333 3.10267 0 2 0C0.897333 0 0 0.897333 0 2ZM10 4C8.89733 4 8 3.10267 8 2C8 0.897333 8.89733 0 10 0C11.1027 0 12 0.897333 12 2C12 3.10267 11.1027 4 10 4ZM18 4C16.8973 4 16 3.10267 16 2C16 0.897333 16.8973 0 18 0C19.1027 0 20 0.897333 20 2C20 3.10267 19.1027 4 18 4Z"/>
        </svg>

    );
};

type IdType = {
    id: number
}

export const IconBookmarkPoints: FC<IdType> = ({id}) => {

    return (
        <BookmarkPointsBlock>
            <BookmarkIcon id={id}/>
            <PointsIcon/>
        </BookmarkPointsBlock>
    )
}