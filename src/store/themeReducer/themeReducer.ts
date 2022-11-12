import {actionThemeType, stateType } from "./type";

const defaultState: stateType = {
    background: "#F3F3F3;",
    color: "#000",
}

export const themeReducer = (state = defaultState, action :actionThemeType) => {

    switch (action.type) {
        case "LIGHT_THEME":
            return {...state, background: "#F3F3F3;", color: "#000"}

        case "DARK_THEME":
            return {...state, background: "#313037;", color: "#fff"}

        default:
            return state
    }
};

