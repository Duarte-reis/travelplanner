import FeaturesHeader from "../../components/features_header/FeaturesHeader"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import ItineraryComplete from "../../components/itinerary_components/ItineraryComplete"

function Itinerary() {
    return (
        <section className="itinerary_wrap">
            <div className="itinerary_wrap_container">
                <FeaturesHeader />
                <BudgetNavigation 
                    page="itinerary"
                    pageTitle="Itinerary"
                />
                <ItineraryComplete />
            </div>
        </section>
    )
}

export default Itinerary