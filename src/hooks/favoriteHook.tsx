import {useState} from 'react';
import {useAppSelector} from "../store";


export const FavoriteHook = (id: number) => {

    const favoritesIdArray = useAppSelector(state => state.postReducer.id)
    const [state, setState] = useState(favoritesIdArray.find(e => e === id))
    const addId = () => {

        if (favoritesIdArray.find(e => e === id)) {
            (favoritesIdArray.splice(favoritesIdArray.indexOf(id), 1))
            setState(undefined)
        } else {
            setState(id)
            favoritesIdArray.push(id)
        }
    }
    return {state, addId};
};
