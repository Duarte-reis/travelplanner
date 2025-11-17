import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector"

function HotelForm() {

    const mealPlan = [
        {value:"", label:""},
        {value:"RO", label:"RO"},
        {value:"BB", label:"BB"},
        {value:"HB", label:"HB"},
        {value:"FB", label:"FB"},
    ]

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
                <div className="single_suplement">
                    <TextBox />
                </div>
                <div className="meal_plan">
                    <Selector 
                        options={mealPlan}
                        defaultValue=""
                        className="meal_plan_selector"
                    />
                </div>
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
                <Selector />
                <Selector />
            </div>
        </section>
    )
}

export default HotelForm