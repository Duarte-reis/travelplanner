import "../../index.css";
import TextBox from "../TextBox";
import TextArea from "../TextArea";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { CounterContext } from "../context/CounterContext";

function ItineraryContainer({ hotelFormData, allHotelForms, formIndex }) {

    const { setGlobalItineraries } = useContext(CounterContext);

    const storageKey = `itinerarydata-${formIndex}`;

    const [itineraryData, setItineraryData] = useLocalStorage(
        storageKey, hotelFormData.dateContainer.map(() => ({
            itineraryTitle: "",
            itineraryDescription: ""
        }))
    );

    // This useEffect updates the global context (setGlobalItineraries) whenever the local itineraryData changes, keeping the context in sync with the component’s state.
    useEffect(() => {
        setGlobalItineraries(prev => ({
            ...prev, [storageKey]: itineraryData
        }));
    }, [itineraryData]);

    return (
        <section id="itinerary_container">
            {hotelFormData.dateContainer.map((dayObj, dayIdx) => {
                const dayData = itineraryData[dayIdx];
                const dayNumber = allHotelForms
                    .slice(0, formIndex)
                    .reduce((sum, form) => sum + form.dateContainer.length, 0) + (dayIdx + 1)

                return (
                    <div key={dayIdx} className="itinerary_content_container">
                        <div className="itinerary_title">
                            <TextBox 
                                value={`Day ${String(dayNumber).padStart(2, "0")}: ${dayObj.date}`} 
                                readOnly
                            />

                            <TextBox
                                value={dayData.itineraryTitle}
                                placeholder={"Title"}
                                onChange={(value) =>
                                    setItineraryData(
                                        itineraryData.map((day, idx) =>
                                            idx === dayIdx ? { ...day, itineraryTitle: value } : day
                                        )
                                    )
                                }
                            />
                        </div>

                        <div className="itinerary_text_area">
                            <TextArea
                                value={dayData.itineraryDescription}
                                placeholder={"Itinerary description"}
                                onChange={(value) =>
                                    setItineraryData(
                                        itineraryData.map((day, idx) =>
                                            idx === dayIdx ? { ...day, itineraryDescription: value } : day
                                        )
                                    )
                                }
                            />
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default ItineraryContainer;
