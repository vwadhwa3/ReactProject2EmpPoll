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
        // <div className="text-center bg-gray-100 w-6/12 ml-[24%] mt-24 " >
             
<div className="bg-gray-200 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
    <h2 className="text-2xl font-semibold mb-2">Poll by {author}</h2>
        <img src={avatarURL} alt="Logo" class="mx-auto h-60 mb-4" />
        
        <p className="text-gray-600 mb-6">Would You Rather</p>
        <form>
            <div class="mb-4">
                <label for="email" className="block text-gray-700">{optionOne.text}</label>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Login</button>
            </div>
            <div class="mb-4">
                <label for="password" className="block text-gray-700">{optionTwo.text}</label>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Login</button>
            </div>

        </form>
    </div>
</div>



        
    )
}

export default PollPage