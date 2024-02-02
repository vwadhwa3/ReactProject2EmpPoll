const QuestionCard =(props)=>{
    console.log("props===")
    console.log(props?.data)
    const {author,timestamp }= props?.data
    return(
        <div className="cardflex bg-gray-200 ml-1 mb-1 mr-2">
            <div className="card text-center">
                <span className="  font-bold">{author}</span><br/>
                 <span>{timestamp}</span><br/>
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"  >Show</button>
            </div>
        </div>        
    )
}
export default QuestionCard