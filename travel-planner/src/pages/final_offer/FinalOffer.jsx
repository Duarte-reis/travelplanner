import FeaturesHeader from "../../components/features_header/FeaturesHeader"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import FinalOfferComplete from "../../components/final_offer_components/FinalOfferComplete"

function FinalOffer() {
    return (
        <>
            <FeaturesHeader />
            <BudgetNavigation 
                page="finaloffer"
                pageTitle="Final Offer"
            />
            <FinalOfferComplete />
        </>
    )
}

export default FinalOffer