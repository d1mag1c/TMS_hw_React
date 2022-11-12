import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {postReducer, } from "./postsReducer/postReducer";
import {themeReducer} from "./themeReducer/themeReducer";
import { themeReducerType } from "./themeReducer/type";
import { postReducerType } from "./postsReducer/type";

export const useThemeSelector: TypedUseSelectorHook<themeReducerType> = useSelector
export const useAppSelector: TypedUseSelectorHook<postReducerType> = useSelector

export const reducer = combineReducers({
    postReducer,
    themeReducer
})

export const store = createStore(reducer, composeWithDevTools())


