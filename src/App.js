import ReactDOM from "react-dom/client";
import  '../App.css'
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect ,useState } from 'react';
import {_getUsers} from "../_DATA"
import {login} from "./reducers/AuthSlice"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import QuestionCard from "./components/QuestionsCard"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom"; 
import { useSelector,useDispatch } from "react-redux";
import { Provider } from "react-redux";
import appStore from "./reducers/appStore"
import Header from './components/Header'
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
     console.log("logged User " +user)
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
      debugger;
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
                 <div>
                     <h2>Employee Polls</h2>
                     <form>
                             <label>User Name
                             <input type="text" className=""  value={username} placeholder="username" onChange={(e) =>setUsername( e.target.value)  }   />                              
                             </label><br/>  
                             <label>Password -   
                             <input type="password" className=""  value={password}   placeholder="pasword" onChange={(e) =>setPassword( e.target.value)  }  /> </label><br/>
                             <input type="submit" value="submit" onClick={handleClick} />
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
                 element:<QuestionCard/>
   
             },
             // {
             //     path:"/about",
             //     element:<Suspense fallback= {<Shimmer/>}> <About/></Suspense>
   
             // },
             // {
             //     path:"/contact",
             //     element:<Contact/>,
   
             // },
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