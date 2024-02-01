import QuestionCard from './QuestionsCard'
const Questions =()=>{
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