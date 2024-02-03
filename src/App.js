import ReactDOM from "react-dom/client";
import  '../App.css'
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect ,useState } from 'react';
import {_getUsers,_getQuestions} from "./_DATA"
import {login} from "./reducers/AuthSlice"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Leaderboard from './components/LeaderBoard'
import Questions from "./components/Questions"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom"; 
import { useSelector,useDispatch } from "react-redux";
import { Provider } from "react-redux";
import appStore from "./reducers/appStore"
import Header from './components/Header'
import Error from './components/Error'
import PollCreactionPage from './components/PollCreationPage'
import PollPage from './components/PollPage'
import {allUserData} from "./reducers/AllUserDataSlice"
import {allQuestionData} from "./reducers/allQuestionSlice"

const AppWrapper = () => {   
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
        const data = await _getQuestions()
        const convertingAllQuestionData = Object.values(await data)
        const jsonAllQuestionData =JSON.parse(JSON.stringify(await convertingAllQuestionData))
        //console.log(jsonAllQuestionData)
        dispatch(allQuestionData(jsonAllQuestionData))        
      }

   
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
     <div className="app" id="app">    
             
                  {user != null ?(
                     <div>
                         <Header/>            
                         <Outlet/>
                     </div>
               ) :( 
                // <div className=" w-6/12 text-center mt-[10%] ml-[30%]   h-44 bg-gray-200">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">  
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Employee Polls</h1>
                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                     <form className="space-y-6">
                             <label className="block text-sm font-medium leading-6 text-gray-900">User Name:</label>
                             <div className="mt-2">
                              <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  value={username} placeholder="username" onChange={(e) =>setUsername( e.target.value)  }   />                            
                               </div>
                               
                             
                             <label className="block text-sm font-medium leading-6 text-gray-900">Password:   </label>
                             <input type="password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  value={password}   placeholder="pasword" onChange={(e) =>setPassword( e.target.value)  }  />  
                             <div>
        <button type="submit" onClick={handleClick}  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
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
             // {
             //     path: "/restaurants/:resId",
             //     element:<RestaurantMenu />
             // }
         ],
         errorElement:<Error/>
     },
   ])








const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)