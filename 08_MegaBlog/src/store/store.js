import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// import { authReducer } from "./authSlice";



const store = configureStore({
    // All Reducers Here    
    reducer : {
        auth : authSlice,
        // TODO : add more slices for posts
    }
})

export default store;
