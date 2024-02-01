import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const AuthSlice = createSlice({
    name: "user",
    initialState:{
        user: null
    },
    reducers:{
         login:(state,action )=>{
            state.user = action.payload
         },
         logout:(state)=>{
            state.user=null
         }
    }
})

export const {login,logout} = AuthSlice.actions;

export default AuthSlice.reducer;