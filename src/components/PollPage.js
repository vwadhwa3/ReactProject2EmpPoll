import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
const PollPage=()=>{
    const { question_id } = useParams();
    console.log(question_id)
    const getQuestion = useSelector(store => store.allQuestion.allQuestion)
    console.log(getQuestion)
    const loggedInUser = useSelector( store => store.user.user)
    console.log(loggedInUser)
    const getAllUser = useSelector(store => store.allUser.allUser)
    console.log(getAllUser)

    const filterQuestion =getQuestion.filter(x =>x.id == question_id )
   const{ 
    author,
    id,
    optionOne,
    optionTwo,
    timestamp}    = filterQuestion[0]
    const getUserDataForQuestion = getAllUser.filter(x => x.id == author)
   const {    avatarURL,name   } = getUserDataForQuestion[0]
    return(
        <div className="text-center bg-gray-100 w-6/12 ml-[24%] mt-24 " >
            <div className="m-6">
                <h3 className="m-4">Poll by {author}</h3>
            </div>
            <div className="ml-[47%] m-3">
                <img className=" h-16 w-16"  src={avatarURL} alt="user img " /> 
            </div>
            <p>Would You Rather</p>
            <div className="cardflex ml-[30%]">
                <div className="card">
                    <div> 
                        <div>{optionOne.text}</div>
                        <button className="bg-green-300 text-black p-2 rounded-2xl">Click Me</button>
                    </div>
                     
                </div>
                <div className="card">
                    <div> 
                        <div>{optionTwo.text}</div>
                        <button className="bg-green-300 text-black p-2 rounded-2xl">Click Me</button>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default PollPage