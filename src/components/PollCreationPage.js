
const PollCreactionPage =()=>{
    return (
       // <div className="text-center">
            
             

            <div className="bg-gray-200 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        
        <h2 className="text-2xl font-semibold mb-2">Would You Rather</h2>
        <p className="text-gray-600 mb-6">Create Your Own Poll</p>
        <form>
            <div class="mb-4">
                <label for="email" class="block text-gray-700">First Option</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Enter your email" />
            </div>
            <div class="mb-4">
                <label for="password" className="block text-gray-700">Second Option</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Submit</button>
      </form>
    </div>
</div>


       // </div>
    )
}

export default PollCreactionPage