import React, {ReactNode} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import {GlobalStyle} from "../../style";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;