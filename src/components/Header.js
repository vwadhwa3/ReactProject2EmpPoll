import { useDispatch } from "react-redux";
import { logout } from "../reducers/AuthSlice";
import {Link } from 'react-router-dom'
const Header = () => {
    const dispatch = useDispatch();
  
    const handleClick = (event) => {
        dispatch(logout())
    }

return (
    <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-yellow-50">
    <div className="Logo-container">
        
    </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4">          
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/Leaderboard">Leaderboard</Link></li>
            <li className="px-4">New</li>
            <li className="px-4">Image</li>
            <li className="px-4"> <button onClick={handleClick}>Logout</button></li>
        </ul>
    </div>
    </div>
)
}

export default Header; 
