
import { createSlice } from "@reduxjs/toolkit";

const allQuestionSlice = createSlice({
    name:"allQuestion",
    initialState:{
        allQuestion:null
    },
    reducers:{
       allQuestionData :(state,action)=>{
            state.allQuestion = action.payload
         }
    }

})

export const {allQuestionData} = allQuestionSlice.actions;

export default allQuestionSlice.reducer;