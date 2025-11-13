import "../../index.css"
import LearnMoreBtns from "./LearnMoreBtns"

function ResourcesBar() {
    return (
        <div className="resources_container">
            <h3>Resources</h3>
            <div className="features_title_container">
                <div className="feature" id="budget_automation">
                    <img src="./src/images/budget-logo.svg" alt="budget automation icon" className="icon"/>
                    <h4>Budget automation</h4>
                </div>
                <div className="feature" id="data_management">
                    <img src="./src/images/data-logo.svg" alt="data management icon" className="icon"/>
                    <h4>Data management</h4>
                </div>
                <div className="feature" id="itinerary_builder">
                    <img src="./src/images/itinerary-logo.svg" alt="itinerary builder icon" className="icon"/>
                    <h4>Itinerary builder</h4>
                </div>
                <div className="feature" id="tailored_proposal">
                    <img src="./src/images/proposal-logo.svg" alt="itinerary builder icon" className="icon"/>
                    <h4>Tailored proposal</h4>
                </div>
            </div>
            <LearnMoreBtns />
        </div>
    )
}

export default ResourcesBar