import { useDispatch ,useSelector } from "react-redux";
import { logout } from "../reducers/AuthSlice";
import {Link } from 'react-router-dom';
import { useEffect, useState  } from 'react';
import {_getUsers} from '../_DATA'

const Header = () => {
    const dispatch = useDispatch();
    const allUserData = useSelector((store)=> store.allUser.allUser)
    const handleClick = (event) => {
        dispatch(logout())
    }
    const user = useSelector((store) => store.user.user)
    const filterUserData= allUserData?.filter(x=> x.id == user)    
    const{ avatarURL,id} = filterUserData[0]

return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
   
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <img src={avatarURL} className="h-8" alt="User Img" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{id}</span>
   
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button onClick={handleClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">Home</Link>
      </li>
      <li>
        <Link className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/leaderboard">Leaderboard</Link>
      </li>
      <li>
         <Link  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/add">New</Link>
      </li>
    </ul>
  </div>
  </div>
 


    </div>
)
}

export default Header; 
