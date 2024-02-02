import QuestionCard from './QuestionsCard'
import { useDispatch ,useSelector } from "react-redux"; 
import {_getQuestions} from '../_DATA'
import { useEffect, useState } from 'react';
const Questions =()=>{
 
const loggedInUser = useSelector(store=> store.user.user)
const [questionData, setQuestionData]=useState('')
//console.log(loggedInUser)  // currentUser

//console.log( "getting question data" );

useEffect(()=>{
    getQuestionData()
},[])

const getQuestionData = async() => { 
    const data =  await _getQuestions()
   // console.log(data)
    setQuestionData( await data)
    
  }

  const a = Object.values(questionData);
//console.log("converting quetions data")
  //.log(a)
  const b = JSON.parse(JSON.stringify(a));
  //console.log("b")
//console.log(b)

  b.sort((firstItem, secondItem) => secondItem.timestamp - firstItem.timestamp);
  b.forEach(val => val.timestamp = new Date(val.timestamp).toLocaleString())
 
  const newQuestions = b.filter(val=>{
    return val.optionOne.votes.includes(loggedInUser) === false &&
    val.optionTwo.votes.includes(loggedInUser )=== false
  } )
 // console.log("newQuestions")
  //console.log(newQuestions)
  const doneQuestions = b.filter(val=> val.optionOne.votes.includes(loggedInUser) === true ||
  val.optionTwo.votes.includes(loggedInUser) === true)
 // console.log("doneQuestions")
  console.log(doneQuestions)
    return (
        <div  >
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