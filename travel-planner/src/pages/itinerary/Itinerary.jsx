import FeaturesHeader from "../../components/features_header/FeaturesHeader"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import ItineraryComplete from "../../components/itinerary_components/ItineraryComplete"

function Itinerary() {
    return (
        <>
            <FeaturesHeader />
            <BudgetNavigation />
            <ItineraryComplete />
        </>
    )
}

export default Itinerary