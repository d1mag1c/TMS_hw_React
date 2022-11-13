import React from 'react';
import {Route, Routes} from "react-router-dom";
import Registration from "../../components/header/login/registration";
import SearchCards from "../../components/header/search/searchCards";
import PageSelected from "../../components/pageSelected";
import WrapperPosts from '../../components/main/wrapper/allCards';
import Favorites from '../../components/main/wrapper/favorites';
import Wrapper from "../../components/main/wrapper";

const RouteComponent = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Wrapper><WrapperPosts/></Wrapper>}/>
                <Route path=":favorites" element={<Wrapper><Favorites/></Wrapper>}/>
            </Route>

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