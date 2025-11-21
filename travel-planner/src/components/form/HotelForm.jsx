import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector"
import { useEffect } from "react";

function HotelForm({index, hotelFormData, setHotelFormData, sendTotalToPricePerPax}) {

    /* ---- Meal Plan selector ---- */
    const mealPlan = [
        {value:"", label:""},
        {value:"RO", label:"RO"},
        {value:"BB", label:"BB"},
        {value:"HB", label:"HB"},
        {value:"FB", label:"FB"},
    ]

    /* ---- Update Text Box value ---- */
    
    const data = hotelFormData[index] || {
        city: "",
        hotel: "",
        hotelPrice: "",
        singleSupplement:"",
        dinner:"",
        dinnerPrice:"",
        lunch:"",
        lunchPrice:"",
    };

    const updateValue = (key, value) => {
        const updated = [...hotelFormData];
        updated[index] = {...updated[index], [key]: value};
        setHotelFormData(updated)
    };

    /* ---- Add values ---- */
    
    const total = 
        (parseFloat(data.hotelPrice) || 0) +
        (parseFloat(data.singleSupplement) || 0) +
        (parseFloat(data.dinnerPrice) || 0) +
        (parseFloat(data.lunchPrice) || 0);
    
    useEffect(() => {
        if (sendTotalToPricePerPax) sendTotalToPricePerPax(total);
    }, [total]);

    return (
        <section id="hotel_form">
            <div className="travel_date">
                <TextBox />
                <TextBox />
            </div>
            <div className="city_text_box">
                <TextBox 
                    value={data.city || ""}
                    onChange={(value) => updateValue("city", value)}
                />
            </div>
            
            <div className="hotel_text_box">
                <TextBox 
                    value={data.hotel || ""}
                    onChange={(value) => updateValue("hotel", value)}
                />
                <TextBox 
                    value={data.hotelPrice || ""}
                    onChange={(value) => updateValue("hotelPrice", value)}
                    placeholder="€"
                />
                <div className="single_suplement">
                    <TextBox 
                        value={data.singleSupplement || ""}
                        onChange={(value) => updateValue("singleSupplement", value)}
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
                    onChange={(value) => updateValue("dinner", value)}
                />
                <TextBox 
                    value={data.dinnerPrice || ""}
                    onChange={(value) => updateValue("dinnerPrice", value)}
                    placeholder="€"
                />
            </div>
            
            <div className="lunch_text_box">
                <TextBox 
                    value={data.lunch || ""}
                    onChange={(value) => updateValue("lunch", value)}
                />
                <TextBox 
                    value={data.lunchPrice || ""}
                    onChange={(value) => updateValue("lunchPrice", value)}
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