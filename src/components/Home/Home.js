import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows, getAllMovies, getAllShows, getKeyword} from "../../features/movie/movie";
const Home = () => {
    const dispatch = useDispatch();
    const keyword = useSelector(getKeyword);
    useEffect(()=>{
        if(!keyword){
            dispatch(fetchAsyncMovies());
            dispatch(fetchAsyncShows());
        }
    },[dispatch]);

    return (
        <>
            <div className="banner-img"></div>
            <MovieListing></MovieListing>
        </>
    );
};

export default Home;