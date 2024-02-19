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

const [btn1 ,setBtn1] = useState(true)
const [btn2 ,setBtn2] = useState(false)

const handleClickBtn1 = ()=>{
    setBtn1(true)
    setBtn2(false)
}

const handleClickBtn2 = ()=>{
    setBtn1(false)
    setBtn2(true)
}


  return (
        <div>
            <div className="m-[10px] bg-gray-50"> 
                        <button id='newQes' className=" m-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2" onClick={handleClickBtn1} >New Questions</button>
                        <button id="oldQues" className="m-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2" onClick={handleClickBtn2}>Answered Questions</button>
            </div>
            <div className="m-[10px] bg-gray-50"  style={
                btn1
                  ? { display: "block" }
                  : { display: "none" }
              }>
                
                <h3 className='font-bold'>New Question</h3>
                <hr/>
                
                <div className='flex'  >
                {
                    newQuestions?.map(
                        (x) =>  <QuestionCard  key={x.id}  data={x}  />
                    )
                }                              
                </div>
            </div>
            <div className="m-[10px]  bg-gray-50"  style={
                btn2
                  ? { display: "block" }
                  : { display: "none" }
              }>
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