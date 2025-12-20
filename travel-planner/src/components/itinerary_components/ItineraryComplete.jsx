import "../../index.css"
import ItineraryContainer from "./ItineraryContainer"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function ItineraryComplete() {

    const { hotelFormData } = useContext(CounterContext);

    return (
        <section id="itinerary_complete">
            {hotelFormData.map((hotelForm, formIndex) => ( // Everytime we add a new hotelFormData, a new itineraryContainer is created
                <ItineraryContainer
                    key={formIndex}
                    hotelFormData={hotelForm}
                    formIndex={formIndex}
                    allHotelForms={hotelFormData}
                />
            ))}
        </section>
    )
}

export default ItineraryComplete