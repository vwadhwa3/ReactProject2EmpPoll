import { createSlice ,current} from "@reduxjs/toolkit"; 
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
         addNewAnswer(state  , action) {
          debugger
         
          const {allQuestion} = current(state)
          console.log(     )
         
          // console.log(state.allQuestion[1])
           
          if (action.payload.option === "optionOne") {
            allQuestion.filter( x=> x.id == action.payload.id)[0].optionOne.votes.concat(action.payload.userid)    
            console.log(    allQuestion.filter( x=> x.id == action.payload.id)[0].optionOne.votes.concat(action.payload.userid)    )        
          } else if (action.payload.option === "optionTwo") {
            allQuestion.filter( x=> x.id == action.payload.id)[0].optionTwo.votes.concat(action.payload.userid)
            console.log(  allQuestion.filter( x=> x.id == action.payload.id)[0].optionTwo.votes.concat(action.payload.userid) )
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