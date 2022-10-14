import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from "./components/title/Title";
import {GlobalStyle} from "./style";
import Header from "./components/header/Header";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <GlobalStyle/>
        <Header />
        <Title/>
    </>
);
