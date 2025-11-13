import "../../index.css"
import TextBox from "../TextBox"
import YesNoDropDown from "../YesNoDropDown"
import MealPlanDropDown from "../MealPlanDropDown"


function HotelForm() {
    return (
        <section id="hotel_form">
            <div className="travel_date">
                <TextBox />
                <TextBox />
            </div>
            <div className="city_text_box">
                <TextBox />
            </div>
            <div className="hotel_text_box">
                <TextBox />
                <TextBox />
            </div>
            <div className="single_suplement">
                <TextBox />
            </div>
            <div className="meal_plan">
                <MealPlanDropDown />
            </div>
            <div className="dinner_text_box">
                <TextBox />
                <TextBox />
            </div>
            <div className="lunch_text_box">
                <TextBox />
                <TextBox />
            </div>
            <div className="guide_driver_dropdown">
                <YesNoDropDown />
                <YesNoDropDown />
            </div>
        </section>
    )
}

export default HotelForm