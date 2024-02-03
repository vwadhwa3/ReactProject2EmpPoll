import { useSelector } from "react-redux"; 

const Leaderboard = () => {

  const allUsers  = useSelector ((store) => store.allUser.allUser)

  const questionData = useSelector((store)=> store.allQuestion.allQuestion)

  const leaderboardData = [];

  allUsers.map(val => {
    leaderboardData.push({name: val.name, avatarURL: val.avatarURL,answer:  ( questionData.filter(item => item.optionOne.votes.includes(val.id) === true || 
        item.optionTwo.votes.includes(val.id)=== true)).length, 
    create: questionData.filter(item => item.author === val.id).length})
  })

 

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