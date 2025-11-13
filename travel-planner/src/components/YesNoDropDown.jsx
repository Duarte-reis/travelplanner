import "../index.css"

function YesNoDropDown() {
    return (
        <div className="text_box" id="yes_no_dropdown">
            <label htmlFor="yes_no" className="sr-only">Choose Yes or No:</label>
            <select name="yes_no" id="yes_no">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    );
}

export default YesNoDropDown;