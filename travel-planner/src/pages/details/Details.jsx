import FeaturesHeader from "../../components/features_header/FeaturesHeader"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import DetailsComplete from "../../components/details/DetailsComplete"

function Details() {
    return (
        <>
            <FeaturesHeader />
            <BudgetNavigation page="details"/>
            <DetailsComplete />
        </>
    )
}

export default Details