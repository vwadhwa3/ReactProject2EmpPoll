import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthSlice"
import allUserDataReducer from '../reducers/AllUserDataSlice'
import allQuestionReducer from '../reducers/allQuestionSlice'
const appStore = configureStore({
    reducer: {
        user:AuthReducer,
        allUser:allUserDataReducer,
        allQuestion:allQuestionReducer
      },
})

export default appStore;