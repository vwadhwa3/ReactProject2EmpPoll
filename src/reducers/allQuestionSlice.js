import { createSlice } from "@reduxjs/toolkit"; 
import {_getQuestions,_saveQuestion,_saveQuestionAnswer} from '../_DATA';
const allQuestionSlice = createSlice({
    name:"allQuestion",
    initialState:{
        allQuestion:{}
    },
    reducers:{
       allQuestionData :(state,action)=>{
            state.allQuestion = action.payload
         },        
  },

    extraReducers: (b) => {
        b.addCase("addQuestion", (state, action) => {             
          //  state.allQuestion.push( action.payload);    
              console.log(action.payload)
              const { author,id,optionOne,optionTwo} = action.payload
              console.log( author,id,optionOne.text,optionTwo.text)
              state.allQuestion.id = action.payload

          });
        b.addCase("addAnswer",(state,action)=>{
          const { authedUser, qid, answer} = action.payload;
          console.log(state)
          const questions = {
            ...state.allQuestion,
            [qid]: {
              ...state.allQuestion[qid],
              [answer]: {
                ...state.allQuestion[qid][answer],
                votes: state.allQuestion[qid][answer].votes.concat([authedUser]),
              },
            },
          };
          state.allQuestion = questions;               
        })  
        b.addCase("allQuestionList", (state,action)=>{
          debugger
          state.allQuestion = action.payload
        })
      }
    })


export const saveQuestion=(saveQuestionData)=>async(d)=>{
    const data = await _saveQuestion(saveQuestionData);
    d({type:"addQuestion",payload:data});
};
  
export const addNewAnswer =({ authedUser, qid, answer})=>async(d)=>{
  debugger
  const data = await _saveQuestionAnswer({ authedUser, qid, answer});
  d({type:"addAnswer",payload:{ authedUser, qid, answer}});
};

export const QuestionsList = () => async (dispatch) => {
  debugger
 const data = await _getQuestions();
 dispatch({ type: "allQuestionList", payload: data })   
};

export const {allQuestionData } = allQuestionSlice.actions;

export default allQuestionSlice.reducer;