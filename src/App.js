import ReactDOM from "react-dom/client";
import  '../App.css'
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect ,useState } from 'react';
import {_getUsers} from "./_DATA"
import {login} from "./reducers/AuthSlice"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Leaderboard from "./components/Leaderboard"
import Questions from "./components/Questions"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom"; 
import { useSelector,useDispatch } from "react-redux";
import { Provider } from "react-redux";
import appStore from "./reducers/appStore"
import Header from './components/Header'
import Error from './components/Error'
import PollCreactionPage from './components/PollCreationPage'
const AppWrapper = () => {   
    return (
      <Provider store={appStore}> 
        <AppLayout />  
      </Provider>
    )
  }
   const AppLayout =()=>{ 
     //const user= null;  
    const user = useSelector((store) => store.user.user)
    const dispatch = useDispatch()
      
    const [userList,setuserList]= useState();
     useEffect(() => {
       getUsers();
    }, []);
    
    const getUsers = async () => {
      debugger
      const data = await _getUsers()
      
      setuserList(data)
       
    }
    
    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("password123");
    
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
                 <div className=" w-6/12 text-center mt-[10%] ml-[30%]   h-44 bg-gray-200">
                     <h1>Employee Polls</h1>
                     <form>
                             <label className="p-3">User Name:
                             <input type="text" className="m-3 border border-black rounded-lg"  value={username} placeholder="username" onChange={(e) =>setUsername( e.target.value)  }   />                              
                             </label><br/>  
                             <label className="p-3">Password:   
                             <input type="password"  className=" m-3 border border-black rounded-lg" value={password}   placeholder="pasword" onChange={(e) =>setPassword( e.target.value)  }  /> </label><br/>
                             <input type="submit" className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" value="submit" onClick={handleClick} />
                      </form>
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
                 path:"/Leaderboard",
                 element: <Leaderboard/> 
   
             },
             {
                 path:"/New",
                 element:<PollCreactionPage/>,
   
             },
             // {
             //     path:"/Grocery",
             //     element:<Suspense fallback= {<Shimmer/>}>
             //                 <Grocery/>
             //            </Suspense>  ,
   
             // },
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