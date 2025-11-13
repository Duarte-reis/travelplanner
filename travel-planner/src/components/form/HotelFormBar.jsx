import "../../index.css"

function HotelFormBar() {
    return (
        <div className="bar" id="hotel_form_bar">
            <div className="day_title">
                <p>Day</p>
            </div>

            <div className="city_hotel_title">
                <p>City</p>
                <p>Hotel</p>
            </div>
            
            
            <div className="single_mealplan_title">
                <p>SingleS.</p>
                <p>MealP.</p>
            </div>


            <div className="dinner_title">
                <p>Dinner</p>
            </div>
            <div className="lunch_title">
                <p>Lunch</p>
            </div>
            
            <div className="guide_driver_title">
                <p>Guide</p>
                <p>Driver</p>
            </div>
        </div>
    )
}

export default HotelFormBar