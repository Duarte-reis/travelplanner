import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector" 

function HotelForm({ formIndex,updateHotelFormData, cityContainer = [], hotelContainer = [], hotelPriceContainer = [], singleSupplementContainer = [], mealPlanContainer = [], dinnerContainer = [], dinnerPriceContainer = [], lunchContainer = [], lunchPriceContainer = [], guideSelectorContainer = [], driverSelectorContainer = [] }) {

    const mealPlan = [
        {value:"", label:""}, 
        {value:"RO", label:"RO"}, 
        {value:"BB", label:"BB"}, 
        {value:"HB", label:"HB"}, 
        {value:"FB", label:"FB"}, ]

    return (
        <section id="hotel_form">
            <div className="travel_date">
                <TextBox />
                <TextBox />
            </div>
            <div className="city_text_box">
                {cityContainer.map((data, index) => (
                    <TextBox
                        key={index}
                        value={data.city}
                        onChange={(value) => updateHotelFormData(formIndex, "cityContainer", "city", index, value)}
                    />
                ))}
            </div>

            <div className="hotel_text_box">
                {hotelContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.hotel}
                        onChange={(value) => updateHotelFormData(formIndex, "hotelContainer", "hotel", index, value)}
                    />
                ))}

                {hotelPriceContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.hotelPrice}
                        onChange={(value) => updateHotelFormData(formIndex, "hotelPriceContainer", "hotelPrice", index, value)}
                    />
                ))}
                
                <div className="single_suplement">
                    {singleSupplementContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.singleSupplement}
                        onChange={(value) => updateHotelFormData(formIndex, "singleSupplementContainer", "singleSupplement", index, value)}
                    />
                ))}

                </div>
                <div className="meal_plan">
                    {mealPlanContainer.map((data, index) => (
                        <Selector
                            key={index} 
                            value={data.mealPlan}
                            options={mealPlan}
                            onChange={(value) => updateHotelFormData(formIndex, "mealPlanContainer", "mealPlan", index, value)}
                    />
                    ))}
                </div>
            </div>
            
            <div className="dinner_text_box">
                {dinnerContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.dinner}
                        onChange={(value) => updateHotelFormData(formIndex, "dinnerContainer", "dinner", index, value)}
                    />
                ))}

                {dinnerPriceContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.dinnerPrice}
                        onChange={(value) => updateHotelFormData(formIndex, "dinnerPriceContainer", "dinnerPrice", index, value)}
                    />
                ))}
                
            </div>
            
            <div className="lunch_text_box">
                {lunchContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.lunch}
                        onChange={(value) => updateHotelFormData(formIndex, "lunchContainer", "lunch", index, value)}
                    />
                ))}

                {lunchPriceContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.lunchPrice}
                        onChange={(value) => updateHotelFormData(formIndex, "lunchPriceContainer", "lunchPrice", index, value)}
                    />
                ))}
                
            </div>
            
            <div className="guide_driver_dropdown">
                {guideSelectorContainer.map((data, index) => (
                    <Selector 
                        key={index}
                        value={data.guideSelector}
                        onChange={(value) => updateHotelFormData(formIndex, "guideSelectorContainer", "guideSelector", index, value)}
                    />
                ))}
                {driverSelectorContainer.map((data, index) => (
                    <Selector 
                        key={index}
                        value={data.driverSelector}
                        onChange={(value) => updateHotelFormData(formIndex, "driverSelectorContainer", "driverSelector", index, value)}
                    />
                ))}
            </div>
        </section>
    )
}

export default HotelForm