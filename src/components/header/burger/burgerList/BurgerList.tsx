import React, {useState} from 'react';
import {BurgerListLi, BurgerListUl, IconSunMoonBlock} from "./style";
import {UserObj} from "../../../../data/Data";
import {findInitials} from "../../login/Initials";
import {InitialsBlock} from "../../login/style";
import {MoonIcon, SunIcon} from "./iconSunMoon";
import {darkTheme, GlobalStyleBody, lightTheme} from "../../../../style";
import {ThemeProvider} from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useThemeSelector} from "../../../../store";

export const BurgerList = () => {
    const [theme, setTheme] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const aaa = useThemeSelector(state => state)

    const functionA = () => {
        dispatch({type:"DARK_THEME"})
    }

    return (
        <>
            <ThemeProvider theme={theme ? lightTheme : darkTheme}>
                <GlobalStyleBody/>
            </ThemeProvider>

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
                                setTheme(true)
                                functionA()
                                console.log(aaa.background)
                            }}
                            fills={!theme}><SunIcon/>
                        </IconSunMoonBlock>
                        <IconSunMoonBlock
                            onClick={() => setTheme(false)}
                            fills={theme}><MoonIcon/>
                        </IconSunMoonBlock>
                    </BurgerListLi>
                    <BurgerListLi>Log Out</BurgerListLi>
                </BurgerListUl>
        </>
    );
};
