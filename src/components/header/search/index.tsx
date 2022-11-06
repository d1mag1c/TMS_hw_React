import React, {useState} from 'react';
import {BtnSearch, IconSearch, Input} from './style';
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const ChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const ValueSearch = () => {
        value ? navigate(`/search/${value}`) : navigate('/')
    }

    const SearchEnter = (e: React.KeyboardEvent<HTMLInputElement>):void =>{
       if(e.key === 'Enter'){
           e.preventDefault()
           e.stopPropagation()
           ValueSearch()
       }
    }

    return (
        <>
            <Input id={'search'} type={'text'} value={value} onChange={ChangeValue} onKeyDown={SearchEnter}></Input>
            <BtnSearch htmlFor={'search'} onClick={ValueSearch}  >
                <IconSearch/>
            </BtnSearch>
        </>
    );
};

export default Search;