import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector" 

function HotelForm({ 
    formIndex, 
    days = 1, 
    updateHotelFormData, 
    dateContainer = [], 
    cityContainer = [], 
    hotelContainer = [], 
    hotelPriceContainer = [], 
    singleSupplementContainer = [], 
    mealPlanContainer = [], 
    dinnerContainer = [], 
    dinnerPriceContainer = [], 
    lunchContainer = [], 
    lunchPriceContainer = [], 
    guideSelectorContainer = [], 
    driverSelectorContainer = [] 
}) {

    const mealPlan = [
        {value:"", label:"MP", disabled: true}, 
        {value:"RO", label:"RO"}, 
        {value:"BB", label:"BB"}, 
        {value:"HB", label:"HB"}, 
        {value:"FB", label:"FB"}, ]

    const guideSelector = [
        {value:"", label:"Guide", disabled: true}, 
        {value:"Yes", label:"Yes"}, 
        {value:"No", label:"No"} ]

    const driverSelector = [
        {value:"", label:"Driver", disabled: true}, 
        {value:"Yes", label:"Yes"}, 
        {value:"No", label:"No"} ]
    
    return (
        <section id="hotel_form">
            <div className="travel_date">
                {dateContainer.map((data, index) => (
                    <div className="date_row" key={index}>
                        <TextBox 
                            value={String(days + 1).padStart(2, "0")}
                            placeholder={"Day"}
                            readOnly
                        />
                        <TextBox 
                            value={data.date}
                            placeholder={"Date"}
                            onChange={(value) => 
                                updateHotelFormData(
                                    formIndex, 
                                    "dateContainer", 
                                    "date", 
                                    index, 
                                    value
                                )
                            }
                        />
                    </div>
                ))}
                
            </div>
            <div className="city_text_box">
                {cityContainer.map((data, index) => (
                    <TextBox
                        key={index}
                        value={data.city}
                        placeholder={"City"}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "cityContainer", 
                                "city", 
                                index, 
                                value
                            )
                        }
                    />
                ))}
            </div>

            <div className="hotel_text_box">
                {hotelContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.hotel}
                        placeholder={"Hotel"}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "hotelContainer", 
                                "hotel", 
                                index, 
                                value
                            )
                        }
                    />
                ))}

                {hotelPriceContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.hotelPrice}
                        placeholder={"€"}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "hotelPriceContainer", 
                                "hotelPrice", 
                                index, 
                                value
                            )
                        }
                    />
                ))}
                
                <div className="single_suplement">
                    {singleSupplementContainer.map((data, index) => (
                        <TextBox 
                            key={index}
                            value={data.singleSupplement}
                            placeholder={"SS"}
                            onChange={(value) => 
                                updateHotelFormData(
                                    formIndex, 
                                    "singleSupplementContainer", 
                                    "singleSupplement", 
                                    index, 
                                    value
                                )
                            }
                        />
                    ))}

                </div>
                <div className="meal_plan">
                    {mealPlanContainer.map((data, index) => (
                        <Selector
                            key={index} 
                            value={data.mealPlan}
                            options={mealPlan}
                            onChange={(value) => 
                                updateHotelFormData(
                                    formIndex, 
                                    "mealPlanContainer", 
                                    "mealPlan", 
                                    index, 
                                    value
                                )
                            }
                        />
                    ))}
                </div>
            </div>
            
            <div className="dinner_text_box">
                {dinnerContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.dinner}
                        placeholder={"Dinner"}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "dinnerContainer", 
                                "dinner", 
                                index, 
                                value
                            )
                        }
                    />
                ))}

                {dinnerPriceContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.dinnerPrice}
                        placeholder={"€"}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "dinnerPriceContainer", 
                                "dinnerPrice", 
                                index, 
                                value
                            )
                        }
                    />
                ))}
                
            </div>
            
            <div className="lunch_text_box">
                {lunchContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.lunch}
                        placeholder={"Lunch"}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "lunchContainer", 
                                "lunch", 
                                index, 
                                value
                            )
                        }
                    />
                ))}

                {lunchPriceContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.lunchPrice}
                        placeholder={"€"}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "lunchPriceContainer", 
                                "lunchPrice", 
                                index, 
                                value
                            )
                        }
                    />
                ))}
                
            </div>
            
            <div className="guide_driver_dropdown">
                {guideSelectorContainer.map((data, index) => (
                    <Selector 
                        key={index}
                        value={data.guideSelector}
                        options={guideSelector}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "guideSelectorContainer", 
                                "guideSelector", 
                                index, 
                                value
                            )
                        }
                    />
                ))}
                {driverSelectorContainer.map((data, index) => (
                    <Selector 
                        key={index}
                        value={data.driverSelector}
                        options={driverSelector}
                        onChange={(value) => 
                            updateHotelFormData(
                                formIndex, 
                                "driverSelectorContainer", 
                                "driverSelector", 
                                index, 
                                value
                            )
                        }
                    />
                ))}
            </div>
        </section>
    )
}

export default HotelForm