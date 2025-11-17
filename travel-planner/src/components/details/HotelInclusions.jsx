import "../../index.css"
import OptionalButton from "../OptionalButton"
import TextBox from "../TextBox"
import Selector from "../Selector"
import MultiplicationResult from "../MultiplicationResult"

function HotelInclusions() {

    const selectHotelRateStars = [
        {value:"", label:""},
        {value:"1*", label:"1*"},
        {value:"2*", label:"2*"},
        {value:"3*", label:"3*"},
        {value:"4*", label:"4*"},
        {value:"5*", label:"5*"}
    ]

    const mealPlan = [
        {value:"", label:""},
        {value:"RO", label:"RO"},
        {value:"BB", label:"BB"},
        {value:"HB", label:"HB"},
        {value:"FB", label:"FB"},
    ]

    const supplementOptions = [
        {value:"", label:""},
        {value:"BB", label:"BB"},
        {value:"HB", label:"HB"},
        {value:"FB", label:"FB"},
    ]

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
                    <Selector
                        options={selectHotelRateStars}
                        defaultValue=""
                        className="hotel_rate_stars_selector"
                    />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <Selector
                        options={selectHotelRateStars}
                        defaultValue=""
                        className="hotel_rate_stars_selector"
                    />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <Selector
                        options={selectHotelRateStars}
                        defaultValue=""
                        className="hotel_rate_stars_selector"
                    />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <Selector
                        options={selectHotelRateStars}
                        defaultValue=""
                        className="hotel_rate_stars_selector"
                    />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <Selector
                        options={selectHotelRateStars}
                        defaultValue=""
                        className="hotel_rate_stars_selector"
                    />
                </div>    
                <div className="hotel_details_line">
                    <TextBox />
                    <TextBox />
                    <Selector
                        options={selectHotelRateStars}
                        defaultValue=""
                        className="hotel_rate_stars_selector"
                    />
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
                        <Selector
                            options={mealPlan}
                            defaultValue=""
                            className="meal_plan_selector"
                        />
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
                    <Selector
                        options={supplementOptions}
                        defaultValue=""
                        className="supplement_options_selector"
                    />
                    <MultiplicationResult />
                    <TextBox />
                </div>
            </div>
        
        </section>
    )
}

export default HotelInclusions