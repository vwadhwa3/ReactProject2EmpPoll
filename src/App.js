import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
 
 
 

const AppLayout =()=>{  
    return <div className="app" id="app">      
                 <p>Hello World</p>    
    </div>
}








const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        // children:[
        //     {
        //         path:"/",
        //         element:<Body/>                
        //     },           
        // ],
        errorElement:<p>Error </p>
    },
])








const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)