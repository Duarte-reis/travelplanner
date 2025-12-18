import FeaturesHeader from "../../components/features_header/FeaturesHeader"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import DetailsComplete from "../../components/details/DetailsComplete"

function Details() {
    return (
        <section className="details_wrap">
            <div className="details_container">
                <FeaturesHeader />
                <BudgetNavigation 
                    page="details"
                    pageTitle="Details"
                />
                <DetailsComplete />
            </div>
        </section>
    )
}

export default Details