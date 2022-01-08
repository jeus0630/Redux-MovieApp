import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";
import {addMovies} from "../../features/movies/movieSlice";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const movieText = "Harry";

        const fetchMovies = async () =>{
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err)=>{
                console.log(err)});
            dispatch(addMovies(response.data));
        }

        fetchMovies();
    },[]);
    return (
        <>
            <div className="banner-img"></div>
            <MovieListing></MovieListing>
        </>
    );
};

export default Home;