import { useDispatch ,useSelector } from "react-redux";
import { logout } from "../reducers/AuthSlice";
import {Link } from 'react-router-dom';
import { useEffect, useState  } from 'react';
import {_getUsers} from '../_DATA'

const Header = () => {

    const dispatch = useDispatch();
  
    const handleClick = (event) => {
        dispatch(logout())
    }
const user = useSelector((store) => store.user.user)
console.log("header = " +user)
const [loginUser ,setloginUser] =useState("");

useEffect(() => {
    getUsers();
 }, []);
 const getUsers = async() => {
   debugger
   const data =  await _getUsers()

   setloginUser(data)
 }
 
debugger
const loginUserData = Object.entries(loginUser);
const filterlogindata  = loginUserData.filter(x => x[1].id == user)
const {avatarURL} =filterlogindata[0][1]
console.log(avatarURL)
 
return (
    <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-yellow-50">
    <div className="Logo-container">
        
    </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4">          
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/Leaderboard">Leaderboard</Link></li>
            <li className="px-4">New</li>
            <li className="px-4"><img className="w-9 h-9" src={avatarURL} alt="user img"  /></li>
            <li className="px-4"> <button onClick={handleClick}>Logout</button></li>
        </ul>
    </div>
    </div>
)
}

export default Header; 
