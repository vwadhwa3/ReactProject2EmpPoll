import QuestionCard from './QuestionsCard'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

const Questions =()=>{
debugger
  const loggedInUser = useSelector(store=> store.user.user)
  console.log(loggedInUser)
  const  allQuestionData = useSelector((store)=> store.allQuestion.allQuestion)
  console.log(allQuestionData)

 const DataAllQuestions = Object.values(allQuestionData);
 const jsonDataAllQuestion = JSON.parse(JSON.stringify(DataAllQuestions))

 

  jsonDataAllQuestion.sort((firstItem, secondItem) => secondItem.timestamp - firstItem.timestamp);
  jsonDataAllQuestion.forEach(val => val.timestamp = new Date(val.timestamp).toLocaleString())

  const newQuestions = jsonDataAllQuestion.filter(val=>{
    return val.optionOne.votes.includes(loggedInUser) === false &&
    val.optionTwo.votes.includes(loggedInUser) === false
  } )

  const doneQuestions = jsonDataAllQuestion.filter(val=> val.optionOne.votes.includes(loggedInUser) === true ||
  val.optionTwo.votes.includes(loggedInUser) === true)

 

  return (
        <div>
            <div className="m-[10px] bg-gray-50">
                <h3 className='font-bold'>New Question</h3>
                <hr/>
                <div className='flex'>
                {
                    newQuestions?.map(
                        (x) =>  <QuestionCard  key={x.id}  data={x}  />
                    )
                }                              
                </div>
            </div>
            <div className="m-[10px]  bg-gray-50">
                <h3 className='font-bold'>Answered Question</h3>
                <hr/>
                <div className='flex'>
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