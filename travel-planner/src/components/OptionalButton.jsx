import "../index.css"

function OptionalButton() {
    return (
        <button id="optional_button" type="submit" aria-label="click">
            <form>
                <label>
                    <input type="checkbox" id="optional" name="optional button" />
                </label>
            </form>
        </button>    
    )
}

export default OptionalButton