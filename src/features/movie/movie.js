import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async (movieText = "Harry")=>{
    const result = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);

    return result.data;
});

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows',async (seriesText = "Friends")=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)

    return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('shows/fetchAsyncMovieOrShowDetail',async (id)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

    return response.data;
})

const slice = createSlice({
    name : 'movies',
    initialState : {
        movies : {

        },
        shows : {

        },
        selectedMovieOrShow : {

        },
        keyword : ''
    },
    reducers : {
        movieReducer : (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow : (state) => {
            state.selectedMovieOrShow = {};
        },
        setKeyword : (state, {payload}) => {
            state.keyword = payload;
        }
    },
    extraReducers : {
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
            console.log("Fetched Successfully");
            return {...state, movies : payload};
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) => {
            console.log("Fetched Successfully");
            return {...state, shows : payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] : (state, {payload}) => {
            console.log("Fetched Successfully");
            return {...state, selectedMovieOrShow : payload};
        },
    }
});

export const {movieReducer, removeSelectedMovieOrShow, setKeyword} = slice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export const getKeyword = state => state.movies.keyword;
export default slice.reducer;