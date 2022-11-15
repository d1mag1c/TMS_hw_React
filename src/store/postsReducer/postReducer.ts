import {ACTION_POST_TYPES} from "./action";
import {ActionPostType, postsStateType} from "./type";

const initialPostState: postsStateType = {
    posts: [],
    id: []
};

export const postReducer = (state = initialPostState, action: ActionPostType) => {
    switch (action.type) {
        case ACTION_POST_TYPES.ADD_POSTS:
            return {...state, posts: action.payload.posts}
        case ACTION_POST_TYPES.GET_ID_FAVOURITE:
            return {...state, posts: action.payload.id}
        default:
            return state
    }
}

// state.posts.map(item => item.id === action.payload.id ? {...item, favourite: !item.favourite}: item)