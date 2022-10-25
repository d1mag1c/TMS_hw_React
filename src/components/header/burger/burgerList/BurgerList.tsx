import React, {useState} from 'react';
import {BurgerListLi, BurgerListUl, IconSunMoonBlock} from "./style";
import {UserObj} from "../../../../data/Data";
import {findInitials} from "../../login/Initials";
import {InitialsBlock} from "../../login/style";
import {MoonIcon, SunIcon} from "./iconSunMoon";
import {darkTheme, GlobalStyleBody, lightTheme} from "../../../../style";
import {ThemeProvider} from 'styled-components';
import {Link} from "react-router-dom";

export const BurgerList = () => {
    const [theme, setTheme] = useState(true);

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
                    <Link to={'/'}><BurgerListLi>Home</BurgerListLi></Link>
                    <BurgerListLi>Add Post</BurgerListLi>
                    <BurgerListLi>
                        <IconSunMoonBlock
                            onClick={() => setTheme(true)}
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
