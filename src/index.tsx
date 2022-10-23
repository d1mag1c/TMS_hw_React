import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from "./components/main";
import Layout from "./contaners/layout";
import BlockMain from "./components/main/blockMain";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Layout>
            <Main><BlockMain/></Main>

            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route exact path="/" element={<Home/>}/>*/}
            {/*        <Route exact path="/about" element={<FormRegistry/>}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </Layout>
        {/*<Input type={'password'} placeholder={'Введите пароль'}/>*/}
        {/*<Input type={'text'} placeholder={'Введите текст'}/>*/}
    </>
);
