import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalStyle} from "./style";
import Main from "./components/main";
import Layout from "./contaners/layout";
import Input from "./components/imput_practic";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <GlobalStyle/>
        <Layout>
            <Main/>
        </Layout>
        {/*<Input type={'password'} placeholder={'Введите пароль'}/>*/}
        {/*<Input type={'text'} placeholder={'Введите текст'}/>*/}
    </>
);
