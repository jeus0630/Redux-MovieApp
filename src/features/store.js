import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movie/movie";

export const store = configureStore({
    reducer : {
        movies : movieReducer
    }
})