import React, {ReactNode} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;