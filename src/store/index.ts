import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {postReducer, postsStateType } from "./postsReducer/postReducer";
import {payloadType} from "./themeReducer/customReducer";

export const useThemeSelector: TypedUseSelectorHook<payloadType> = useSelector
export const useAppSelector: TypedUseSelectorHook<postsStateType> = useSelector
export const store = createStore(postReducer, composeWithDevTools())


