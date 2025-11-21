import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"

function FinalOfferItinerary() {
    return (
        <div className="final_offer_itinerary_container">
            <Bar 
                barContent={["Itinerary"]}
            />
            <div className="final_offer_itinerary_pictures">
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
                <img src="../src/images/final-offer-cover.png" alt="destination image" />
            </div>
            <TextBox />
        </div>
    )
}

export default FinalOfferItinerary