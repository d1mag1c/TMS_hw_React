import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from "./contaners/layout";
import RouteComponent from "./contaners/routes";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <RouteComponent/>
                </Layout>
            </BrowserRouter>
        </>
    );
};

export default App;