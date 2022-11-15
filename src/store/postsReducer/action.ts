import {CardInfo} from "./type";

export enum ACTION_POST_TYPES {
    ADD_POSTS = 'ADD_POSTS',
    GET_ID_FAVOURITE = "GET_ID_FAVOURITE"
}

export const addPosts = (postsArray: CardInfo[]) => ({
    type: ACTION_POST_TYPES.ADD_POSTS,
    payload: {
        posts: postsArray
    }
})