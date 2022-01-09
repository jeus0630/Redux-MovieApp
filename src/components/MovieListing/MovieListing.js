import {useSelector} from "react-redux";
import {getAllMovies} from "../../features/movie/movie";
import MovieCard from "../MovieCard/MovieCard";
import "./MoveListing.scss";

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const renderMovies = movies.Search?.map((el,idx)=><MovieCard key={idx} data={el}></MovieCard>)
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;
