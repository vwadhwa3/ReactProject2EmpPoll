import { useState,useEffect  } from 'react';
import {_getQuestions, _getUsers} from '../_DATA'
import { useDispatch ,useSelector } from "react-redux"; 

const Leaderboard = () => {
 
const loggedInUser = useSelector((store)=> store.user.user)

const [questionData, setQuestionData]=useState('')

const [allUsers ,setAllUser]= useState('')

const i =0;
useEffect(()=>{
   
    console.log("use Effect called ")
    getQuestionData()    
    getAllUSer()
},[])
 
const getAllUSer = async () => {
    const data = await _getUsers();
    // console.log(data)
    setAllUser(await data)
}
const convertingAllUserData = Object.values(allUsers)
// console.log("converting all user data")
// console.log(convertingAllUserData)

const jsonAllUserData = JSON.parse(JSON.stringify(convertingAllUserData));
console.log(jsonAllUserData)




const getQuestionData = async() => { 
    const data =  await _getQuestions()
   // console.log(data)
    setQuestionData( await data)
    
  }

  const leaderboardData = [];
  Object.values(allUsers).map(val => {
    leaderboardData.push({name: val.name, avatarURL: val.avatarURL,answer:  (Object.values(questionData).filter(item => item.optionOne.votes.includes(val.id) === true || 
        item.optionTwo.votes.includes(val.id)=== true)).length, 
    create: Object.values(questionData).filter(item => item.author === val.id).length})
  })

console.log(leaderboardData)

    return (
        <div className=" w-6/12 text-center mt-[10%] ml-[30%]   h-[30 rem] bg-gray-200" >
            <table>
                <thead>
                <tr>                     
                    <th>User</th>
                    <th>Answered</th>
                    <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData?.map(
                        (x,i) =>
                        <tr key={i}>
                            
                            <td>   <img   className="w-9 h-9"  src={x.avatarURL}  alt="user img"  /><span>{x.name}</span></td>
                            <td>{x.answer}</td>
                            <td>{x.create}</td>
                        </tr>
                    )}
                 </tbody>
            </table>
        </div>
    )
}

export default Leaderboard