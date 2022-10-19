import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from "./components/title/Title";
import {GlobalStyle} from "./style";
import Header from "./components/header/Header";
import Tabs from "./components/main/tabs/Tabs";
import Input from "./components/imput_practic";
import Main from "./components/main";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <GlobalStyle/>
        {/*<Title/>*/}
        <Header />
<Main />

        {/*<Input type={'password'} placeholder={'Введите пароль'}/>*/}
        {/*    <Input type={'text'} placeholder={'Введите текст'}/>*/}
    </>
);
