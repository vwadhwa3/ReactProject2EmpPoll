const Header = () => {
return (
    <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-yellow-50">
    <div className="Logo-container">
        
    </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4">          
            <li className="px-4">Home</li>
            <li className="px-4">Leaderboard</li>
            <li className="px-4">New</li>
            <li className="px-4">Image</li>
            <li className="px-4">Logout</li>
        </ul>
    </div>
    </div>
)
}

export default Header; 
