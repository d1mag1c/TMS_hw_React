import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from "./components/title/title";
import {GlobalStyle} from "./style";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <GlobalStyle/>
        <Title/>
    </>
);
