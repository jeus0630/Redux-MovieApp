import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";
import {useDispatch} from "react-redux";
import {movieReducer} from "../../features/movie/movie";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const movieText = "Harry";

        const fetchMovies = async () => {
            const result = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).
            catch(err=>{
                console.log(err);
            });
            dispatch(movieReducer(result.data));
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