const QuestionCard =()=>{
    return(
        <div className="cardflex bg-gray-200 ml-1 mb-1 mr-2">
            <div className="card text-center">
                <span className="  font-bold">name</span><br/>
                 <span>time</span><br/>
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"  >Show</button>
            </div>
        </div>        
    )
}
export default QuestionCard