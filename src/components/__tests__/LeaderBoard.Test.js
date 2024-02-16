import { render,screen } from "@testing-library/react";
import Leaderboard from "../LeaderBoard";
import { Provider } from "react-redux";
import store from '../../reducers/appStore'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

test("sholud load LeaderBoard",()=>{
        render(<MemoryRouter><Provider store={store}><Leaderboard/></Provider></MemoryRouter> )
     const text = screen.getByRole('table')
     expect(text).toBeInTheDocument();
})

describe('LeaderBoard Page', () => {
        it('LeaderBoard will match snapshot ', () => {
          const component = render(<MemoryRouter><Provider store={store}><Leaderboard/></Provider></MemoryRouter>);
          expect(component).toMatchSnapshot();
        })
      })