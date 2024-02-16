import QuestionCard from '../QuestionsCard'
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../reducers/appStore'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('QuestionCard Page', () => {
    it('QuestionCard will match snapshot ', () => {
      const component = render(<MemoryRouter><Provider store={store}><QuestionCard data={ {author:"Test data" ,timestamp:"1468479767190",id:"DummyIdAbc123"}}/></Provider></MemoryRouter>);
      expect(component).toMatchSnapshot();
    })
  })