import { useSelector } from "react-redux"; 

const Leaderboard = () => {

  const allUsers  = useSelector ((store) => store.allUser.allUser)

  const questionData = useSelector((store)=> store.allQuestion.allQuestion)
  const jsonQuestionData  =  Object.values(questionData)
  const leaderboardData = [];

  allUsers?.map(val => {
    leaderboardData?.push({name: val.name, avatarURL: val.avatarURL,
        answer:  ( jsonQuestionData.filter(item => item?.optionOne?.votes?.includes(val.id) === true || 
        item?.optionTwo?.votes?.includes(val.id)=== true)).length, 
    create: jsonQuestionData.filter(item => item.author === val.id).length,
        sum: ( ( jsonQuestionData.filter(item => item?.optionOne?.votes?.includes(val.id) === true || 
        item?.optionTwo?.votes?.includes(val.id)=== true)).length  + jsonQuestionData.filter(item => item.author === val.id).length)
})
  })

  

leaderboardData.sort(function(a,b){
  return b.sum - a.sum;
}) 
 

    return (
        
        //<div className=" w-[20%] text-center mt-[10%] ml-[40%]   h-[30 rem] bg-gray-200" >
        <div className="  relative overflow-x-auto shadow-md sm:rounded-lg"> 
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>                     
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3">Answered</th>
                    <th className="px-6 py-3">Created</th>                    
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData?.map(
                        (x,i) =>
                        <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">                            
                            <td className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">   <img   className="w-9 h-9"  src={x.avatarURL}  alt="user img"  /><span>{x.name}</span></td>
                            <td className="px-6 py-4">{x.answer}</td>
                            <td className="px-6 py-4">{x.create}</td>                           
                        </tr>
                    )}
                 </tbody>
            </table>
        </div>
    )
}

export default Leaderboard