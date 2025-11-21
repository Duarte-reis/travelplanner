import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"

function ItineraryContainer() {
    return (
        <section id="itinerary_container">
            <div className="itinerary_title">
                <Bar 
                    barContent = {["Day:"]}
                />
                <TextBox />
            </div>
            <div className="itinerary_text_area">
                <TextBox />
            </div>
        </section>
    )
}

export default ItineraryContainer