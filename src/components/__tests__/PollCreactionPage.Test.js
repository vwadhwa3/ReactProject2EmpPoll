import PollCreactionPage from '../PollCreationPage'
import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../reducers/appStore'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('PollCreactionPage Page', () => {
    it('PollCreactionPage will match snapshot ', () => {
      const component = render(<MemoryRouter><Provider store={store}><PollCreactionPage/></Provider></MemoryRouter>);
      expect(component).toMatchSnapshot();
    })
  })