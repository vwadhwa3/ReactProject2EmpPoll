import QuestionCard from './QuestionsCard'
import { useDispatch ,useSelector } from "react-redux"; 
 
const Questions =()=>{
 
const loggedInUser = useSelector(store=> store.user.user)
console.log(loggedInUser)
// const data =   _getUsers()
// const userdata = Object.values(data).map((item)=>item)
// const a = Object.values(userdata);
// const b = JSON.parse(JSON.stringify(a));
// console.log("a")
// console.log(a)
// console.log("b")
// console.log(b)

    return (
        <div  >
            <div className="questionborder bg-gray-50">
                <h3 className='font-bold'>New Question</h3>
                <hr/>
                <div className='cardflex'>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                </div>
            </div>
            <div className="questionborder  bg-gray-50">
                <h3 className='font-bold'>Answered Question</h3>
                <hr/>
                <div className='cardflex'>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                </div>
            </div>
        </div>
    )
}
export default Questions