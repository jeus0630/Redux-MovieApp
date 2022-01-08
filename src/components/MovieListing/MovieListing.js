import React from 'react';
import {useSelector} from "react-redux";
import {getAllMovies} from "../../features/movies/movieSlice";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    return (
        <div>
            {
                movies.Search?.map((el,idx)=><div key={idx}>{el.Title}</div>)
            }
        </div>
    );
};

export default MovieListing;
