import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {_saveQuestion} from '../_DATA'
import { saveQuestion} from '../reducers/allQuestionSlice'
const PollCreactionPage =()=>{
const [firstOption, setFirstOption ] = useState('')
const [secondOption , setSecondOption] =useState('')

const loggedInUser = useSelector(store => store.user.user)
const dispatch = useDispatch();
const Navigate = useNavigate();
const handleClick = (e) =>{ 

     e.preventDefault()
debugger
    if(firstOption && secondOption) {
        const saveQuestionData= {
            optionOneText:firstOption,
            optionTwoText:secondOption,
            author:loggedInUser
        }      
       dispatch(saveQuestion(saveQuestionData));
       Navigate('/');
      }  
    //   else setError(true);
}
    return (
            <div className="bg-gray-200 flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">        
                    <h2 className="text-2xl font-semibold mb-2">Would You Rather</h2>
                    <p className="text-gray-600 mb-6">Create Your Own Poll</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="First" className="block text-gray-700">First Option</label>
                            <input type="text" onChange={((e)=>{setFirstOption(e.target.value)})} id="First" name="First" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="First Option" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Second" className="block text-gray-700">Second Option</label>
                            <input type="text" onChange={((e)=>{setSecondOption(e.target.value)})} id="Second" name="Second" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Second Option" />
                        </div>
                        <button type="submit"  onClick={handleClick}   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Submit</button>
                </form>
                </div>
            </div>
    )
}

export default PollCreactionPage