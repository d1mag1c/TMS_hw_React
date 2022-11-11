type stateType = {
    background?: string,
    color?: string
}

const defaultState: stateType = {
    background: "#F3F3F3;",
    color: "#000",
}

export const darkThemeReducer = {
    background: "#313037;",
    color: "#fff",
}

export type payloadType = {
    background: string,
    color: string
}

export type actionType = {
    type: string,
    payload: payloadType
}

// const action:actionType = {
//     type: '',
//     payload: defaultState
// }

export const customReducer = (state = defaultState, action :actionType) => {

    switch (action.type) {
        case "LIGHT_THEME":
            return {...state, defaultState}

        case "DARK_THEME":
            return {...state, darkThemeReducer}

        default:
            return state
    }
};

