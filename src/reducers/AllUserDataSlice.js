import { createSlice } from "@reduxjs/toolkit";

const allUserDataSlice = createSlice({
    name: "allUser",
    initialState:{
        allUser: null
    },
    reducers:{
         allUserData:(state,action)=>{
            state.allUser =action.payload
         }
    }
})

export const {allUserData} = allUserDataSlice.actions;

export default allUserDataSlice.reducer;