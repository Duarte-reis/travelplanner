import "../../index.css"
import OptionalButton from "../OptionalButton"
import TextBox from "../TextBox"
import Selector from "../Selector"
import MultiplicationResult from "../MultiplicationResult"

function HotelInclusions() {
    return (
        <section id="hotel_inclusions">
            <div className="accommodation_optional">
                <p>Accommodation:</p>
                <p>Yes</p>
                <OptionalButton />
                <p>No</p>
                <OptionalButton />
            </div>

            <div className="hotel_details_container">
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>      
            </div>

            <div className="hotel_extras_container">
                <div className="city_tax_meal_plan_wrapper">
                    <div className="hotel_extras_city_tax">
                        <p>City Tax</p>
                        <Selector/>
                    </div>
                    <div className="hotel_extras_meal_plan">
                        <p>Meal Plan</p>
                        <Selector/>
                        <TextBox />
                    </div>
                </div>
                
                <div className="beverages_bellman_wrapper">
                    <div className="hotel_extras_beverages">
                        <p>Beverages</p>
                        <Selector/>
                    </div>
                    <div className="hotel_extras_bellman">
                        <p>Bellman</p>
                        <Selector/>
                        <TextBox />
                    </div>
                </div>
                
                <div className="hotel_extras_supplement">
                    <p>Supplement</p>
                    <Selector/>
                    <MultiplicationResult />
                    <TextBox />
                </div>
            </div>
        
        </section>
    )
}

export default HotelInclusions