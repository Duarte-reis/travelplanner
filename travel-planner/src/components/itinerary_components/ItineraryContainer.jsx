import "../../index.css";
import TextBox from "../TextBox";
import TextArea from "../TextArea";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { CounterContext } from "../context/CounterContext";

function ItineraryContainer({ hotelFormData, formIndex }) {

    const { globalItineraries, setGlobalItineraries } = useContext(CounterContext);

    // Cada container usa sua própria storageKey
    const storageKey = `itinerarydata-${formIndex}`;

    // Dados persistentes para cada container
    const [itineraryData, setItineraryData] = useLocalStorage(
        storageKey,
        hotelFormData.dateContainer.map(() => ({
            itineraryTitle: "",
            itineraryDescription: ""
        }))
    );

    // Sincroniza automaticamente com o Context
    useEffect(() => {
        setGlobalItineraries(prev => ({
            ...prev,
            [storageKey]: itineraryData
        }));
    }, [itineraryData]);

    return (
        <section id="itinerary_container">
            {hotelFormData.dateContainer.map((dayObj, dayIdx) => {
                const dayData = itineraryData[dayIdx];

                return (
                    <div key={dayIdx} className="itinerary_content_container">
                        <div className="itinerary_title">
                            <TextBox value={`Day: ${dayObj.date}`} readOnly />

                            <TextBox
                                value={dayData.itineraryTitle}
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
