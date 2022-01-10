import React from 'react';
import {Link} from "react-router-dom";
import user from "../../images/user.png"
import "./Header.scss";
import {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows, setKeyword} from "../../features/movie/movie";

const Header = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        const {value} = e.target;
        setInput(prevState => value);
    }

    const onSubmitHandler = () => {
        dispatch(fetchAsyncMovies(input));
        dispatch(fetchAsyncShows(input));
        dispatch(setKeyword(input));
        setInput(prevState => '')
    }

    const onKeyDownHandler = (e) => {
        const {key} = e;
        if(key == "Enter") onSubmitHandler();
    }

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    Movie App
                </Link>
            </div>
            <div className="search-bar">
                <input value={input} type="text" placeholder={"Search Movies or Shows"} onKeyDown={onKeyDownHandler} onChange={onChangeHandler}/>
            </div>
            <div className="user-image">
                <img src={user} alt="user"/>
            </div>
        </div>
    );
};

export default Header;
