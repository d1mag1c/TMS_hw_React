import React, {ReactNode} from 'react';
import Footer from "../../components/footer";
import {GlobalStyle} from "../../style";
import Header from "../../components/header";
import Main from "../../components/main";
import {useThemeSelector} from "../../store";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    const selectTheme = useThemeSelector(state => state.themeReducer);

    return (
        <>
            <GlobalStyle props={selectTheme}/>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
};

export default Layout;