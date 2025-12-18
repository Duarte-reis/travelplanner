import FeaturesHeader from "../../components/features_header/FeaturesHeader"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import FinalOfferComplete from "../../components/final_offer_components/FinalOfferComplete"

function FinalOffer() {
    return (
        <section className="final_offer_wrap">
            <div className="final_offer_wrap_content">
                <FeaturesHeader />
                <BudgetNavigation 
                    page="finaloffer"
                    pageTitle="Final Offer"
                />
                <FinalOfferComplete />
            </div>
        </section>
    )
}

export default FinalOffer