import ReactDOM from "react-dom/client";
//import  '../App.css'
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect ,useState } from 'react';
import {_getUsers,_getQuestions} from "./_DATA"
import {login} from "./reducers/AuthSlice"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Leaderboard from './components/LeaderBoard'
import Questions from "./components/Questions"
 
 
import { Provider } from "react-redux";
import appStore from "./reducers/appStore"
import Header from './components/Header'
import Error from './components/Error'
import PollCreactionPage from './components/PollCreationPage'
import PollPage from './components/PollPage'
import {allUserData} from "./reducers/AllUserDataSlice"
// import {QuestionsList} from "./reducers/allQuestionSlice"
 import { QuestionsList } from "./reducers/allQuestionSlice";
export const AppWrapper = () => {   
    return (
      <Provider store={appStore}> 
        <AppLayout />  
      </Provider>
    )
  }
   const AppLayout =()=>{ 
    const [userList,setuserList]= useState();
    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("password123");
     //const user= null;  
    const user = useSelector((store) => store.user.user)
    const dispatch = useDispatch()
      
   
    useEffect(()=>{
     // console.log("use Effect called login ")
      getAllUSer()
      getAllQuestiondata()
  },[])

  const getAllUSer = async () => {
    const data = await _getUsers();
    const convertingAllUserData = Object.values(await data)
    const jsonAllUserData = JSON.parse(JSON.stringify(await convertingAllUserData));
    setuserList(jsonAllUserData)
    dispatch(allUserData(await jsonAllUserData))
}
const getAllQuestiondata = async () =>{
  const qdata = QuestionsList()
  dispatch(await qdata );      
}
    // const getAllQuestiondata = async () =>{
    //     const data = await _getQuestions()
    //     const convertingAllQuestionData = Object.values(await data)
    //     const jsonAllQuestionData =JSON.parse(JSON.stringify(await convertingAllQuestionData))
    //     dispatch(allQuestionData(jsonAllQuestionData))        
    //   }

   
    const handleClick = (event) => {
  
      setPassword(password);
      setUsername(username);
      if(username && password) {
        const user =  Object.entries(userList).filter(
          (val) => val[1].id === username && val[1].password === password
        );
        dispatch(login(username))
        }
      // else {
      //   // setError(true);
      //   // setSuccess(false);
      // }
      
    }

     return ( 
     <div  id="app">    
             
                  {user != null ?(
                     <div>
                         <Header/>            
                         <Outlet/>
                     </div>
               ) :( 
                <div className="bg-gray-200 flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                    
                    <h2 className="text-2xl font-semibold mb-2">Employee Polls</h2>
                    <p className="text-gray-600 mb-6">Please log in to continue.</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">User Name:</label>
                            <input type="text" value={username}  onChange={(e) =>setUsername( e.target.value)  }   id="username" name="username" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input type="password"  value={password}   onChange={(e) =>setPassword( e.target.value) } id="password" name="password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Enter your password" />
                        </div>
                        <button type="submit" onClick={handleClick}  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Login</button>
                         </form>
                </div>
            </div>   
                ) }                               
     </div>
     )}
   
   
   const appRouter = createBrowserRouter([
     {
         path:"/",
         element:<AppWrapper/>,
         children:[
             {
                 path:"/",
                 element:<Questions/>
   
             },
             {
                 path:"/leaderboard",
                 element: <Leaderboard/> 
   
             },
             {
                 path:"/add",
                 element:<PollCreactionPage/>,
   
             },
             {
                 path:"/questions/:question_id",
                 element: <PollPage  /> ,
   
             },            
         ],
         errorElement:<Error/>
     },
   ])








const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)