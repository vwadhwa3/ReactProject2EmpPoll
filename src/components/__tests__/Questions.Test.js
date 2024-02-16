import Questions from '../Questions'
import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../reducers/appStore'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

///New Question



test("sholud  find all the  heading  in page",()=>{
    render(<MemoryRouter><Provider store={store}><Questions/></Provider></MemoryRouter> )
 const text = screen.queryAllByRole('heading')
 expect(text).toHaveLength(2)
})