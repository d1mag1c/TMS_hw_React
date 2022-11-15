import {useState} from 'react';
import {useAppSelector} from "../store";
import {useDispatch} from "react-redux";
import {addToFavorites} from "../store/postsReducer/action";


export const FavoriteHook = (id: number) => {

    const favoritesIdArray = useAppSelector(state => state.postReducer.idFavorite)
    const [state, setState] = useState(favoritesIdArray.find(e => e === id))
    const dispatch = useDispatch();

    const addId = () => {

        if (favoritesIdArray.find(e => e === id)) {
            dispatch(addToFavorites([...favoritesIdArray].filter(e => e !== id)))
            setState(undefined)
        } else {
            dispatch(addToFavorites([...favoritesIdArray, id]))
            setState(id)
        }
    }
    return {state, addId};
};
