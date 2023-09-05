import { configureStore } from "@reduxjs/toolkit";
import redSource from "./redSource";

const store = configureStore({
    reducer:{
        redSource:redSource
    }
})
export default store;