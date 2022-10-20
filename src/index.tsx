import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalStyle} from "./style";
import Header from "./components/header/Header";
import Main from "./components/main";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
        {/*<Input type={'password'} placeholder={'Введите пароль'}/>*/}
        {/*    <Input type={'text'} placeholder={'Введите текст'}/>*/}
    </>
);
