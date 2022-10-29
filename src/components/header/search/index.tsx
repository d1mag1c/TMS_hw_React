import React, {useState} from 'react';
import {BtnSearch, IconSearch, Input} from './style';
import {IPostResult, PostsArray} from "../../../data/Posts";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const ChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    let ResultSearch: IPostResult[];

    const ValueSearch = () => {
        ResultSearch = PostsArray.results.filter(e => e.title.toLowerCase().includes(value.toLowerCase()))
        if (value) {

            navigate('/search', {
                state: {
                    ResultSearch,
                    value
                }
            });
        } else navigate('/')
    }

    return (
        <>
            <Input id={'search'} type={'text'} value={value} onChange={ChangeValue}></Input>
            <BtnSearch htmlFor={'search'} onClick={ValueSearch} >
                <IconSearch/>
            </BtnSearch>
        </>
    );
};

export default Search;