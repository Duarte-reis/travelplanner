import "../index.css"

function OptionalButton() {
    return (
        <button id="optional_button" type="submit" aria-label="click">
            <label>
                <input type="checkbox" id="optional" name="optional button" />
            </label>
        </button>    
    )
}

export default OptionalButton