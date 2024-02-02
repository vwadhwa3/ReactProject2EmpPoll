
const PollCreactionPage =()=>{
    return (
        <div className="text-center">
            
            <h3 className=" mt-4 p-2 border-b-2 border-t-2   border-gray-100">Would You Rather</h3>

            <h5 className="mt-2 border-b-2 border-gray-100 ">Create Your Own Poll </h5>
        
            <form>
                <label>
                    First Option :
                    <input type="text" className="m-3 border border-black rounded-lg"  id="firstOption" placeholder="First Option "/>
                </label><br/>
                <label>
                    Second Option :
                    <input type="text" className="m-3 border border-black rounded-lg"   id="secondOption" placeholder="Second Option "/>
                </label><br/>
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Submit</button>
                
            </form>
        </div>
    )
}

export default PollCreactionPage