import React, {createContext, Dispatch, FC, PropsWithChildren, ReactNode, useContext, useReducer} from "react";

type ChildrenProps = {
    children: ReactNode
}
const inStore = {
    darkMode: false
}

type ActionType = {
    type:string
}

const themeReducer = (state: typeof inStore, action: object & ActionType) => {
    switch (action.type) {
        case 'LIGHTMODE':
            return{darkMode: false};
        case 'DARKMODE':
            return {darkMode: true};
        default:
            return state
    }
}

export const TContext = createContext <{
    state: typeof inStore,
    dispatch: Dispatch<any>
}>({
    state:inStore,
    dispatch: () => null
})


export const  ThemeProvider = ({children}:ChildrenProps) => {
 const [state, dispatch] = useReducer(themeReducer, inStore)
    return(
        <TContext.Provider value={{state, dispatch}}>{children}</TContext.Provider>
    )
}

// другой файл

// onClick={() => theme.state.darkMode ? theme.dispatch({type: 'LIGHTMODE'}): theme.dispatch({type: 'DARKMODE'})}
// const theme = useContext(TContext)