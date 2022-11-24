import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {postReducer, } from "./postsReducer/postReducer";
import {themeReducer} from "./themeReducer/themeReducer";
import { postReducerType } from "./postsReducer/type";
import createSagaMiddleware from 'redux-saga'
import {authReducer} from "./authReducer/authReducer";
import { signUpSaga } from "./saga/saga";
import { themeReducerType } from "./themeReducer/type";
import {all} from "redux-saga/effects";
import {signInSaga} from "./saga/signInSaga";

export const useThemeSelector: TypedUseSelectorHook<themeReducerType> = useSelector
export const useAppSelector: TypedUseSelectorHook<postReducerType> = useSelector

export const reducer = combineReducers({
    postReducer,
    themeReducer,
    authReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))

function* rootSaga() {
    yield all(
        [
            signUpSaga(),
            signInSaga(),
        ]
    )
}


sagaMiddleware.run(rootSaga)
