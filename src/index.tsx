import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from "./components/main";
import Layout from "./contaners/layout";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Layout>
            <Main/>
        </Layout>
        {/*<Input type={'password'} placeholder={'Введите пароль'}/>*/}
        {/*<Input type={'text'} placeholder={'Введите текст'}/>*/}
    </>
);
