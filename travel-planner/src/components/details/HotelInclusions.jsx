import "../../index.css";
import OptionalButton from "../OptionalButton";
import TextBox from "../TextBox";
import Selector from "../Selector";
import Multiplication from "../Multiplication";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import HotelInclusionsExtras from "./HotelInclusionsExtras";

function HotelInclusions() {

    const { hotelFormData, hotelInclusions, setHotelInclusions } = useContext(CounterContext);

    const selectHotelRateStars = [
    { value: "", label: "" },
    { value: "1*", label: "1*" },
    { value: "2*", label: "2*" },
    { value: "3*", label: "3*" },
    { value: "4*", label: "4*" },
    { value: "5*", label: "5*" },
    ];

    const mealPlan = [
    { value: "", label: "" },
    { value: "RO", label: "RO" },
    { value: "BB", label: "BB" },
    { value: "HB", label: "HB" },
    { value: "FB", label: "FB" },
    ];

    const supplementOptions = [
    { value: "", label: "" },
    { value: "BB", label: "BB" },
    { value: "HB", label: "HB" },
    { value: "FB", label: "FB" },
    ];

    return (
        <section id="hotel_inclusions">
            <div className="hotel_details_container">
                <div className="accommodation_optional">
                    <p>Accommodation:</p>
                    <p>Yes</p>
                    <OptionalButton />
                    <p>No</p>
                    <OptionalButton />
                </div>

                {hotelFormData.map((form, formIndex) =>
                    form.cityContainer.map((cityObj, idx) => { // The city is the first item that comes in this line (City --> Hotel --> Stars). We want to render a line for each city within each form, with the respective hotel and its stars. The city and the hotel come from hotelFormData and are displayed in this component.
                        const index = formIndex * form.cityContainer.length + idx; // cityContainer is an array, we need an index to access the corret item inside the array
                    return (
                        <div className="hotel_details_line" key={`${formIndex}-${idx}`}>
                            <TextBox
                                value={cityObj.city || ""}
                                readOnly
                            />
                            <TextBox // hotelInclusions (Context) receives the name of the hotel from hotelFormData. onChange allows us to update it, send it to FinalOffer, without changing hotelFormData.
                                value={hotelInclusions.cityInclusionsContainer[index]?.hotel || ""} 
                                onChange={(value) => {
                                    setHotelInclusions(prev => {
                                        const updated = [...prev.cityInclusionsContainer];
                                        updated[index] = {...updated[index], hotel: value};
                                        return {cityInclusionsContainer: updated};
                                        });
                                }}
                            />
                            <Selector
                                options={selectHotelRateStars}
                                className="hotel_rate_stars_selector"
                                value={hotelInclusions.cityInclusionsContainer[index]?.hotelRateStars || ""}
                                onChange={(value) => {
                                    setHotelInclusions(prev => {
                                        const updated = [...prev.cityInclusionsContainer];
                                        updated[index] = {...updated[index], hotelRateStars: value};
                                    return {cityInclusionsContainer: updated};
                                    });
                                }}
                            />
                        </div>
                        );
                    })
                )}
            </div>
            <HotelInclusionsExtras />
        </section>
        );
        }

export default HotelInclusions;
