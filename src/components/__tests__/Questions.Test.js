import Questions from '../Questions'
import { render,screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../reducers/appStore'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

 

test("sholud  find all the  heading  in page",()=>{
    render(<MemoryRouter><Provider store={store}><Questions/></Provider></MemoryRouter> )
 const text = screen.queryAllByRole('heading')
 expect(text).toHaveLength(1)
})

test("click event test hide show for Questions" ,()=>{
    render(<MemoryRouter><Provider store={store}><Questions/></Provider></MemoryRouter> )
    const text = screen.getByRole("button" ,{name:/Answered Questions/i})
    fireEvent.click(text)
    expect(text.btn2).toBe(undefined);
} )