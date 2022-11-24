import React from 'react';
import {Route, Routes} from "react-router-dom";
import Registration from "../../components/header/login/registration";
import SearchCards from "../../components/header/search/searchCards";
import PageSelected from "../../components/pageSelected";
import WrapperPosts from '../../components/main/wrapper/allCards';
import Favorites from '../../components/main/wrapper/favorites';
import Wrapper from "../../components/main/wrapper";
import Popular from "../../components/main/wrapper/popular";
import { ActivationRoute } from './activation';

const RouteComponent = () => {
    return (
        <Routes>

            <Route path="/" element={<Wrapper/>} >
                <Route index element={<WrapperPosts/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/popular" element={<Popular/>}/>
            </Route>

            <Route path="/registration" element={<Registration/>}/>
            <Route path="/search">
                <Route path=":value" element={<SearchCards/>}/>
            </Route>
            <Route path="/post">
                <Route path=":id" element={<PageSelected/>}/>
            </Route>
            <Route path='/activate/:uid/:token' element={<ActivationRoute/>} />
            <Route path="*" element={<h1>Ресурс не найден</h1>} />
        </Routes>
    );
};

export default RouteComponent;