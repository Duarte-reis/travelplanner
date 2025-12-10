import "../../index.css";
import Bar from "../Bar";
import TextBox from "../TextBox";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function FinalOfferItinerary() {
    const { hotelFormData, globalItineraries } = useContext(CounterContext);

    return (
        <div className="final_offer_itinerary_container">
            <Bar barContent={["Itinerary"]} />

            <div className="final_offer_itinerary_pictures">
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
            </div>

            <div className="final_offer_itinerary_content">
                {hotelFormData.map((hotelForm, formIndex) => {
                    const storageKey = `itinerarydata-${formIndex}`;
                    const itineraryData = globalItineraries[storageKey] || [];

                    return (
                        <div key={formIndex} className="itinerary_container_display">
                            {hotelForm.dateContainer.map((dayObj, dayIdx) => {
                                const dayData = itineraryData[dayIdx] || {};

                                return (
                                    <div key={dayIdx} className="itinerary_content_container">
                                        <div className="itinerary_title">
                                            <TextBox
                                                value={`Day: ${dayObj.date}`}
                                                readOnly
                                            />
                                            <TextBox
                                                value={dayData.itineraryTitle || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="final_offer_itinerary_text_area">
                                            <p> {dayData.itineraryDescription || ""} </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FinalOfferItinerary;
