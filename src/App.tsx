import React from 'react';
import {Route, Routes} from 'react-router-dom';
import BlockMain from "./components/main/blockMain";
import Layout from "./contaners/layout";
import Registration from "./components/header/login/registration";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<BlockMain/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
            </Layout>
        </>
    );
};

export default App;