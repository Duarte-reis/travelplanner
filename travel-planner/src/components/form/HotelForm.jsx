import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector"
import { useEffect } from "react";

function HotelForm({ formIndex, hotelFormData, updateHotelFormData, sendTotalToNet }) {

    const data = hotelFormData[formIndex];

    const mealPlan = [
        {value:"", label:""}, 
        {value:"RO", label:"RO"}, 
        {value:"BB", label:"BB"}, 
        {value:"HB", label:"HB"}, 
        {value:"FB", label:"FB"}, ]

    const update = (key, value) => {
        updateHotelFormData(formIndex, key, value);
    };

    const total =
        (parseFloat(data.hotelPrice) || 0) +
        (parseFloat(data.singleSupplement) || 0) +
        (parseFloat(data.dinnerPrice) || 0) +
        (parseFloat(data.lunchPrice) || 0);

    useEffect(() => {
            if (sendTotalToNet) {
                sendTotalToNet(total);
            }
        }, [total, sendTotalToNet]);

    return (
        <section id="hotel_form">
            <div className="travel_date">
                <TextBox />
                <TextBox />
            </div>
            <div className="city_text_box">
                <TextBox 
                    value={data.city}
                    onChange={value => update("city", value)}
                />
            </div>
            
            <div className="hotel_text_box">
                <TextBox 
                    value={data.hotel || ""}
                    onChange={(value) => update("hotel", value)}
                />
                <TextBox 
                    value={data.hotelPrice || ""}
                    onChange={(value) => update("hotelPrice", value)}
                    placeholder="€"
                />
                <div className="single_suplement">
                    <TextBox 
                        value={data.singleSupplement || ""}
                        onChange={(value) => update("singleSupplement", value)}
                        placeholder="€"
                    />
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
                <TextBox 
                    value={data.dinner || ""}
                    onChange={(value) => update("dinner", value)}
                />
                <TextBox 
                    value={data.dinnerPrice || ""}
                    onChange={(value) => update("dinnerPrice", value)}
                    placeholder="€"
                />
            </div>
            
            <div className="lunch_text_box">
                <TextBox 
                    value={data.lunch || ""}
                    onChange={(value) => update("lunch", value)}
                />
                <TextBox 
                    value={data.lunchPrice || ""}
                    onChange={(value) => update("lunchPrice", value)}
                    placeholder="€"
                />
            </div>
            
            <div className="guide_driver_dropdown">
                <Selector />
                <Selector />
            </div>
        </section>
    )
}

export default HotelForm