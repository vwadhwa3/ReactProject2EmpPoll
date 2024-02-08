import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNewAnswer} from "../reducers/allQuestionSlice"
const PollPage=()=>{
    const { question_id } = useParams();
    const dispatch = useDispatch()

    const getQuestion = useSelector(store => store.allQuestion.allQuestion)

 

    const loggedInUser = useSelector( store => store.user.user)
     
    const getAllUser = useSelector(store => store.allUser.allUser)
    

    const filterQuestion =getQuestion.filter(x =>x.id == question_id )

   const{ 
    author,
    id,
    optionOne,
    optionTwo,
    timestamp}    = filterQuestion[0]
    const getUserDataForQuestion = getAllUser.filter(x => x.id == author)
   const {    avatarURL,name   } = getUserDataForQuestion[0]

   const [voteCount1, setVoteCount1] = useState(0);
   const [voteCount2, setVoteCount2] = useState(0);
   const [answer, setAnswer] = useState("");
   const [isDisable, setIsDisable] = useState(false);
   const [disableOption1, setIdisableOption1] = useState(false);
   const [disableOption2, setdisableOption2] = useState(false);
   
   useEffect(() => {
    setVoteCount1(filterQuestion[0]?.optionOne.votes.length)
    setVoteCount2(filterQuestion[0]?.optionTwo.votes.length)
    if (filterQuestion[0]?.optionOne.votes.includes(
       loggedInUser
    ) || filterQuestion[0]?.optionTwo.votes.includes(
       loggedInUser
    )) {
      setIsDisable(true);
    }
  }, [filterQuestion]);


   const handleClick = (event) => {
    debugger
     
        if (isDisable == false) {
            setIsDisable(true);
            setAnswer(event);
            if(event == 'optionOne') {
                setVoteCount1( voteCount1+ 1);
                setIdisableOption1(true);
            }
            else {
                setVoteCount2(voteCount2 + 1);
                setdisableOption2(true);
            }
            const answerjson = { authedUser: loggedInUser, qid: question_id, option: event };
            dispatch(addNewAnswer(answerjson ));
          }
    }

    return(
<div className="bg-gray-200 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
    <h2 className="text-2xl font-semibold mb-2">Poll by {author}</h2>
        <img src={avatarURL} alt="Logo" className="mx-auto h-60 mb-4" />        
        <p className="text-gray-600 mb-6">Would You Rather</p>
        <form>
            <div className="mb-4">
                <label  className="block text-gray-700">{optionOne.text}</label>
                <button type="button" onClick={() => handleClick("optionOne")}   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Click To Answer</button>
                <span
              style={
                isDisable
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
            >
              voted people: {voteCount1}
              <br /> percentage:
              {((voteCount1 * 100) /
                (voteCount1+ voteCount2)).toFixed(2)}
              %
            </span>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">{optionTwo.text}</label>
                <button type="button" onClick={() => handleClick("optionTwo")} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Click To Answer</button>
                <span
              style={
                isDisable
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
            >
              voted people: {voteCount2}
              <br /> percentage:
              {((voteCount2 * 100) /
                (voteCount1+ voteCount2)).toFixed(2)}
              %
              </span>
            </div>
        </form>
    </div>
</div>        
    )
}

export default PollPage