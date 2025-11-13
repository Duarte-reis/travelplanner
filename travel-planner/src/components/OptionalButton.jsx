import "../index.css"

function OptionalButton() {
    return (
        <div id="optional_button">
            <form>
                <label>
                    <input type="checkbox" id="optional" name="optional button" value="" />
                </label>
                <button type="submit"></button>
            </form>    
        </div>
    )
}

export default OptionalButton