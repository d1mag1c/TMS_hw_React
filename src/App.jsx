import React from 'react';
import Main from "./components/main";
import BlockMain from "./components/main/blockMain";
import Layout from "./contaners/layout";


const App = () => {
    return (
        <>
            <Layout>
                <Main>
                    {/*<Router>*/}
                    {/*    <Switch>*/}
                    {/*        <Route path="/reg">*/}
                    {/*            <Registration/>*/}
                    {/*        </Route>*/}
                    {/*        <Route path="/">*/}
                    {/*            <BlockMain/>*/}
                    {/*        </Route>*/}
                    {/*    </Switch>*/}

                    {/*</Router>*/}
                    <BlockMain/>
                </Main>
            </Layout>

        </>
    );
};

export default App;