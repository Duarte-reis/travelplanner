import "../../index.css"
import FinalOfferCover from "./FinalOfferCover"
import FinalOfferPricingDetails from "./FinalOfferPricingDetails"
import FinalOfferInclusions from "./FinalOfferInclusions"
import FinalOfferExclusions from "./FinalOfferExclusions"
import FinalOfferOptional from "./FinalOfferOptional"
import FinalOfferGeneralTerms from "./FinalOfferGeneralTerms"
import FinalOfferItinerary from "./FinalOfferItinerary"

function FinalOfferComplete() {

    return (
        <section id="final_offer_complete">
            <FinalOfferCover />
            <FinalOfferPricingDetails />
            <FinalOfferInclusions />
            <FinalOfferExclusions />
            <FinalOfferOptional />
            <FinalOfferGeneralTerms />
            <FinalOfferItinerary />
        </section>
    )
}

export default FinalOfferComplete