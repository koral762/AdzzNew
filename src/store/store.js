import { configureStore } from "@reduxjs/toolkit";
import articalesReducer from "./articalesReducer";

export const store= configureStore({
    reducer:{
        articales: articalesReducer,
    },
})