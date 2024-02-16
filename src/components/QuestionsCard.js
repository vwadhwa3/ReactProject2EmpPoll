import { Link } from "react-router-dom"
const QuestionCard =(props)=>{
    const {author,timestamp,id }= props?.data
    return(
        <div className="flex bg-gray-200 ml-1 mb-1 mr-2">          
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-4 text-xl font-medium text-center text-gray-500 dark:text-gray-400">{author}</h5>

<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<span className="text-base font-normal  leading-tight text-gray-500 dark:text-gray-400 ms-3">{new Date(timestamp).toLocaleString()}</span>
</li>
</ul>
<Link to={"/questions/"+ id } key={id}>
    <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Show</button>
</Link>
</div>




</div> 
        

    )
}
export default QuestionCard