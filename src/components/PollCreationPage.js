
const PollCreactionPage =()=>{
    return (
        <div>
            <h3>Would You Rather</h3>
            <h5>Create Your Own Poll </h5>
            <hr/>
            <form>
                <label>
                    First Option 
                    <input type="text" id="firstOption" placeholder="First Option "/>
                </label><br/>
                <label>
                    Second Option
                    <input type="text" id="secondOption" placeholder="Second Option "/>
                </label><br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default PollCreactionPage