import React, {useState} from 'react';
import {BurgerListLi, BurgerListUl, IconSunMoonBlock} from "./style";
import {MoonIcon, SunIcon} from "./iconSunMoon";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {Login} from "../../login";

export const BurgerList = () => {

    const [state, setState] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectLightTheme = () => {
        dispatch({type: "LIGHT_THEME"})
    }

    const selectDarkTheme = () => {
        dispatch({type: "DARK_THEME"})
    }

    return (
        <>
            <BurgerListUl>
                <BurgerListLi onClick={() => navigate('/registration')} bg white>
                    <Login/>
                </BurgerListLi>
                <BurgerListLi onClick={() => {
                    window.scrollTo(0, 0)
                    navigate('/')
                }}>Home</BurgerListLi>
                <BurgerListLi onClick={() => navigate('/addPost')}>Add Post</BurgerListLi>
                <BurgerListLi>
                    <IconSunMoonBlock
                        onClick={() => {
                            setState(true)
                            !state && selectLightTheme()
                        }}
                        fills={!state}><SunIcon/>
                    </IconSunMoonBlock>
                    <IconSunMoonBlock
                        onClick={() => {
                            setState(false)
                            state && selectDarkTheme()
                        }}
                        fills={state}><MoonIcon/>
                    </IconSunMoonBlock>
                </BurgerListLi>
                <BurgerListLi>Log Out</BurgerListLi>
            </BurgerListUl>
        </>
    );
};
