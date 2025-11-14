import "../../index.css"
import FinalOfferGeneralTerms from "./FinallOfferGeneralTerms"
import FinalOfferCover from "./FinalOfferCover"
import FinalOfferOverview from "./FinalOfferOverview"
import FinalOfferPricing from "./FinalOfferPricing"
import FinalOfferTripDay from "./FinalOfferTripDay"

function FinalOfferComplete() {
    return (
        <section id="final_offer_complete">
            <FinalOfferCover />
            <FinalOfferOverview />
            <FinalOfferTripDay />
            <FinalOfferPricing />
            <FinalOfferGeneralTerms />
        </section>
    )
}

export default FinalOfferComplete