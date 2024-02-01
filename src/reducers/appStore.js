import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthSlice"

const appStore = configureStore({
    reducer: {
        user:AuthReducer
      },
})

export default appStore;