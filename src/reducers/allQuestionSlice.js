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
    },extraReducers: (b) => {
        b          
          .addCase("addQuestion", (state, action) => {             
            state.allQuestion.push( action.payload);        
          })
          .addCase("ansQuestion", (state, action) => {
            const allquestionsdata = {
              ...state.allQuestion,[action.payload.qid]:{...state.allQuestion[action.payload.qid],
                [action.payload.answer]:{...state.allQuestion[action.payload.qid][action.payload.answer],
                  votes: state.allQuestion[action.payload.qid][action.payload.answer].
                  votes.concat([action.payload.authedUser]),
                },
              },
            };
            state.allQuestion = allquestionsdata;
          });
      },

})



export const saveQuestion=(saveQuestionData)=>async(d)=>{
    const data = await _saveQuestion(saveQuestionData);
    d({type:"addQuestion",payload:data});
};
  
export const saveQuestionAnswer=({ authedUser,qid,answer})=>async(d)=>{
  await _saveQuestionAnswer({ authedUser,qid,answer });
  d({type:"ansQuestion",payload:{authedUser,qid,answer}});
};
export const {allQuestionData} = allQuestionSlice.actions;

export default allQuestionSlice.reducer;