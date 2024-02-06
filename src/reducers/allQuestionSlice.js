import { createSlice } from "@reduxjs/toolkit"; 
import {_saveQuestion,_saveQuestionAnswer} from '../_DATA';

const allQuestionSlice = createSlice({
    name:"allQuestion",
    initialState:{
        allQuestion:null
    },
    reducers:{
       allQuestionData :(state,action)=>{
            state.allQuestion = action.payload
         },  
         addNewAnswer(state, action) {
          if (action.payload.option === "optionOne") {
            state.Questions[action.payload.id].optionOne.votes.push(
              action.payload.userid
            );
          } else if (action.payload.option === "optionTwo") {
           state.Questions[action.payload.id].optionTwo.votes.push(
              action.payload.userid
            );
          }
        },
  },
    extraReducers: (b) => {
        b.addCase("addQuestion", (state, action) => {             
            state.allQuestion.push( action.payload);        
          });       
      },    
    })




export const saveQuestion=(saveQuestionData)=>async(d)=>{
    const data = await _saveQuestion(saveQuestionData);
    d({type:"addQuestion",payload:data});
};
  
 
export const {allQuestionData,addNewAnswer} = allQuestionSlice.actions;

export default allQuestionSlice.reducer;