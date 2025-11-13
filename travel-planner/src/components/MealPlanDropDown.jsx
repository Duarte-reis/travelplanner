import "../index.css"

function MealPlanDropDown() {
    return (
        <div className="text_box" id="yes_no_dropdown">
            <label htmlFor="meal_plan" className="sr-only">Choose Meal Plan:</label>
            <select name="meal_plan" id="meal_plan">
                <option value="RO">RO</option>
                <option value="BB">BB</option>
                <option value="BB">HB</option>
                <option value="BB">FB</option>
            </select>
        </div>
    );
}

export default MealPlanDropDown;