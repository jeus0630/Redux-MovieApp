import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'movies',
    initialState : {
        movies : {

        }
    },
    reducers : {
        movieReducer : (state, {payload}) => {
            state.movies = payload;
        }
    }
});

export const {movieReducer} = slice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default slice.reducer;