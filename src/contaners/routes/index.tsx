import React from 'react';
import {Route, Routes} from "react-router-dom";
import BlockMain from "../../components/main/blockMain";
import Registration from "../../components/header/login/registration";
import SearchCards from "../../components/header/search/searchCards";
import PageSelected from "../../components/pageSelected";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<BlockMain/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/search">
                <Route path=":value" element={<SearchCards/>}/>
            </Route>
            <Route path="/post">
                <Route path=":id" element={<PageSelected/>}/>
            </Route>
        </Routes>
    );
};

export default RouteComponent;