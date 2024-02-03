import QuestionCard from './QuestionsCard'
import { useDispatch ,useSelector } from "react-redux"; 
import {_getQuestions} from '../_DATA'
import { useEffect, useState } from 'react';
const Questions =()=>{
 
  const loggedInUser = useSelector(store=> store.user.user)
  const  allQuestionData = useSelector((store)=> store.allQuestion.allQuestion)
  const questions = []
  allQuestionData.map( x => questions.push(x))
  questions.sort((firstItem, secondItem) => secondItem.timestamp - firstItem.timestamp);
  questions.forEach(val => val.timestamp = new Date(val.timestamp).toLocaleString())
   const newQuestions = questions.filter( val=>{
    return val.optionOne.votes.includes(loggedInUser) === false &&
    val.optionTwo.votes.includes(loggedInUser )=== false
  } )
  
  const doneQuestions = questions.filter(val=> val.optionOne.votes.includes(loggedInUser) === true ||
  val.optionTwo.votes.includes(loggedInUser) === true)

  return (
        <div>
            <div className="questionborder bg-gray-50">
                <h3 className='font-bold'>New Question</h3>
                <hr/>
                <div className='cardflex'>
                {
                    newQuestions?.map(
                        (x) =>  <QuestionCard  key={x.id}  data={x}  /> 
                    )
                }                              
                </div>
            </div>
            <div className="questionborder  bg-gray-50">
                <h3 className='font-bold'>Answered Question</h3>
                <hr/>
                <div className='cardflex'>
                    {
                        doneQuestions?.map(
                            (y)=> <QuestionCard key={y.id} data={y}/>
                        )
                    }
                 
                </div>
            </div>
        </div>
    )
}
export default Questions