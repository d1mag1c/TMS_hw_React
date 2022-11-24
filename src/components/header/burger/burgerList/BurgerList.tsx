import React, {useState} from 'react';
import {BurgerListLi, BurgerListUl, IconSunMoonBlock} from "./style";
import {UserObj} from "../../../../data/users";
import {findInitials} from "../../login/Initials";
import {InitialsBlock} from "../../login/style";
import {MoonIcon, SunIcon} from "./iconSunMoon";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../store";


export const BurgerList = () => {
    const [state, setState] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectLightTheme = () => {
        dispatch({type:"LIGHT_THEME"})
    }

    const selectDarkTheme = () => {
        dispatch({type:"DARK_THEME"})
    }

    const user = useAppSelector(state => state.postReducer)
    console.log(user)
    return (
        <>
                <BurgerListUl>
                    <BurgerListLi bg white>
                        <InitialsBlock>
                            {findInitials(UserObj[0].user.toString())}
                        </InitialsBlock>
                        {UserObj[0].user}
                    </BurgerListLi>
                    <BurgerListLi onClick={() => {
                        window.scrollTo(0, 0)
                        navigate('/')
                    }}>Home</BurgerListLi>
                    <BurgerListLi>Add Post</BurgerListLi>
                    <BurgerListLi>
                        <IconSunMoonBlock
                            onClick={() => {
                                setState(true)
                                !state && selectLightTheme()}}
                            fills={!state}><SunIcon/>
                        </IconSunMoonBlock>
                        <IconSunMoonBlock
                            onClick={() => {
                                setState(false)
                                state && selectDarkTheme()}}
                            fills={state}><MoonIcon/>
                        </IconSunMoonBlock>
                    </BurgerListLi>
                    <BurgerListLi>Log Out</BurgerListLi>
                </BurgerListUl>
        </>
    );
};
