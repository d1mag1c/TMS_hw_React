import React, {ReactNode} from 'react';
import Footer from "../../components/footer";
import {GlobalStyle} from "../../style";
import Header from "../../components/header";
import Main from "../../components/main";
import {BrowserRouter} from "react-router-dom";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Header/>
                <Main>
                    {children}
                </Main>
            </BrowserRouter>
            <Footer/>
        </>
    );
};

export default Layout;