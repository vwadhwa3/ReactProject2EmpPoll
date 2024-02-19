import { useSelector , useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect ,useState} from "react";
import { QuestionsList } from "../reducers/allQuestionSlice";
import {_getQuestions} from "../_DATA"
import { addNewAnswer } from "../reducers/allQuestionSlice";
import Page404 from "./Page404";
const PollPage=()=>{
    const navigate = useNavigate();
    const { question_id } = useParams();
    console.log("question_id",question_id)
    const dispatch = useDispatch()
    const getQuestion = useSelector(store => store.allQuestion.allQuestion)
    console.log("getQuestion",getQuestion) //b
    const loggedInUser = useSelector( store => store.user.user)     
    console.log("loggedInUser",loggedInUser)  //a
    const getAllUser = useSelector(store => store.allUser.allUser) 
    console.log("getAllUser",getAllUser)    //c   
    const getAllQuestiondata = async () =>{
    const qdata = QuestionsList()
      dispatch(await qdata );      
    }
    useEffect(()=>{
       console.log("use Effect called Poll Page ")       
       getAllQuestiondata()
   },[])

   const loopableGetQuestion = Object.values(getQuestion) 

   const filterQuestion =loopableGetQuestion.filter(x =>x.id == question_id )
   console.log("filterQuestion")
   console.log(filterQuestion.length === 0 )

if(!filterQuestion.length  ){
  
  return (<Page404 />);
}

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
    const [hide, setHide] = useState(false);
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
      setHide(true);
    }
  }, []);



   const handleClick = (event) => {
    debugger     
        if (hide == false) {
          setHide(true);
            setAnswer(event);
            if(event == 'optionOne') {
                setVoteCount1( voteCount1+ 1);
                setIdisableOption1(true);
            }
            else {
                setVoteCount2(voteCount2 + 1);
                setdisableOption2(true);
            }
            const answerjson = { authedUser: loggedInUser, qid: question_id, answer: event };
            dispatch(addNewAnswer(answerjson ));
          }
    }

return(
<div className="bg-gray-200 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
    <h2 className="text-2xl font-semibold mb-2">Poll by {author} |<span> {name} </span></h2>
        <img src={avatarURL} alt="Logo" className="mx-auto h-60 mb-4" />        
        <p className="text-gray-600 mb-6">Would You Rather</p>
        <form>
            <div className="mb-4">
                <label  className="block text-gray-700">{optionOne.text}</label>
                <button type="button" onClick={() => handleClick("optionOne")}   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Click To Answer</button>
                <span
              style={
                hide
                  ? { display: "block" }
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
                hide
                  ? { display: "block" }
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