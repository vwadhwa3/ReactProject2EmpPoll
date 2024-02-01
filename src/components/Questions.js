import QuestionCard from './QuestionsCard'
const Questions =()=>{
    return (
        <div>
            <div className="questionborder">
                <h3>New Question</h3>
                <hr/>
                <div className='cardflex'>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>
                </div>
            </div>
            <div className="questionborder">
                <h3>Done</h3>
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