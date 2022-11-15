import {CardInfo} from "./type";

export enum ACTION_POST_TYPES {
    ADD_POSTS = 'ADD_POSTS',
    GET_ID_FAVORITE = "GET_ID_FAVORITE"
}

export const addPosts = (postsArray: CardInfo[]) => ({
    type: ACTION_POST_TYPES.ADD_POSTS,
    payload: {
        posts: postsArray
    }
})

export const addToFavorites = (arrayFavorites: number[]) => ({
    type: ACTION_POST_TYPES.GET_ID_FAVORITE,
    payload: {
        idFavorite: arrayFavorites
    }
})