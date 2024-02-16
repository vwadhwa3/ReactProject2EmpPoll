import { _saveQuestion ,_saveQuestionAnswer} from "../../_DATA";


describe(" two unit tests written which test the _saveQuestion() function in _DATA.js", () => {
    it('An async unit test to verify that the saved question is returned and all expected fields '+
       'are populated when correctly formatted data is passed to the function',async ()=>{
      const optionOneText=  'Test1';
      const optionTwoText = 'Test2';
      const author = 'Test Auther';
  
      const saveQuestion = await _saveQuestion({optionOneText, optionTwoText, author})
      expect(saveQuestion.author).toEqual(author);
      expect(saveQuestion.optionOne.text).toEqual(optionOneText);
      expect(saveQuestion.optionTwo.text).toEqual(optionTwoText);
    })

    it('An async unit test to verify that an error is returned if incorrect data is passed to the function', async () => {
        const optionOneText=  'optionOne';
        const author = 'author';
        await expect(_saveQuestion({optionOneText, author})).
        rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
      })
})




describe('there two unit tests written which test the _saveQuestionAnswer() function in _DATA.js', () => {
    it('An async unit test to verify that true is returned when correctly formatted data is passed to the function', async ()=> {
      const qid = "6ni6ok3ym7mf1p33lnez";
      const authedUser = "mtsamis";
      const answer = 'optionTwo';
      await expect(_saveQuestionAnswer({ authedUser, qid, answer})).resolves.toEqual(true);
    })
    it('An async unit test to verify that an error is returned if incorrect data is passed to the function', async ()=> {
      const qid = "6ni6ok3ym7mf1p33lnez";
      const answer = 'optionTwo';
      await expect(_saveQuestionAnswer({ qid, answer})).rejects.toEqual("Please provide authedUser, qid, and answer");
    })
  })