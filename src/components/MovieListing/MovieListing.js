import {useSelector} from "react-redux";
import {getAllMovies, getAllShows, getKeyword} from "../../features/movie/movie";
import MovieCard from "../MovieCard/MovieCard";
import "./MoveListing.scss";
import Slider from "react-slick";
import {settings} from "../../common/settings";

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const renderMovies = movies.Search?.map((el,idx)=><MovieCard key={idx} data={el}></MovieCard>);
    const renderShows = shows.Search?.map((el,idx)=><MovieCard key={idx} data={el}></MovieCard>);
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    <Slider {...settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;
