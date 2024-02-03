import {useRouteError} from "react-router-dom"
const  Error = () =>{
    const error = useRouteError();
    return(
        <div className="text-center"> 
            Page Not Found !!!!
            <h1>{error?.data}</h1>
        </div>
    )
}


export default Error