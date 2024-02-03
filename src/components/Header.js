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
    const filterUserData= allUserData.filter(x=> x.id == user)    
    const{ avatarURL,id} = filterUserData[0]

return (
    <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-yellow-50">
    <div className="Logo-container">  
        <div className="flex items-center">
            <img className=" h-24 mr-2" src={avatarURL} alt="user img"/>      
            <span className=" ml-2 mr-2">{id} </span>
        </div>
    </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4">          
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/leaderboard">Leaderboard</Link></li>
            <li className="px-4"><Link to="/add">New</Link> </li>
            <li className="px-4"> <button onClick={handleClick}>Logout</button></li>
        </ul>
    </div>
    </div>
)
}

export default Header; 
