import React, {ReactNode} from 'react';
import Index from "../../components/header";
import Footer from "../../components/footer";
import {GlobalStyle} from "../../style";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return (
        <>
            <GlobalStyle/>
            <Index/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;