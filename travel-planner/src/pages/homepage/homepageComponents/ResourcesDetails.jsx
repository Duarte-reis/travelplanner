import "../../../index.css"
import LearnMoreBtns from "../../../generalComponents/LearnMoreBtns"
import ResourcesBar from "./ResourcesBar"

function ResourcesDetails() {
    return (
        <div className="resources_details_container">
            <ResourcesBar />
            <div className="resources_details_board">
                <div className="resources_details" id="budget_automation_details">
                    <div className="text_content">
                        <div className="title">
                            <img src="./src/images/budget-logo.svg" alt="budget automation icon" className="icon"/>
                            <h4>Budget automation</h4>
                        </div>
                        <p>Create accurate quotes in seconds. Our smart automation tool calculates costs, margins, and supplier rates instantly. Eliminates manual errors and saves you hours of work. Focus on building experiences, not spreadsheets.</p>
                        <LearnMoreBtns />   
                    </div>
                    <div className="image_content">
                        <img src="./src/images/budget-automation-screens.png" alt="budget form screen image"/>
                    </div> 
                </div>

                <div className="resources_details" id="data_management_details">
                    <div className="image_content">
                        <img src="./src/images/data-management-screens.png" alt="details screen image"/>
                    </div> 
                    <div className="text_content">
                        <div className="title">
                            <img src="./src/images/data-logo.svg" alt="budget automation icon" className="icon"/>
                            <h4>Data management</h4>
                        </div>
                        <p>Keep all your client information, itineraries, and supplier details organized in one feature. Ensure accuracy, consistency, and professionalism in every proposal and communication. Deliver the right information to the right client, every time.</p>
                        <LearnMoreBtns />   
                    </div>
                </div>

                <div className="resources_details" id="itinerary_builder_details">
                    <div className="text_content">
                        <div className="title">
                            <img src="./src/images/itinerary-logo.svg" alt="itinerary icon" className="icon"/>
                            <h4>Itinerary builder</h4>
                        </div>
                        <p>Write and structure, each day, of your clients trips effortlessly. Create clear, professional itineraries that are easy to read and ready to share, keeping your travel plans organized and your clients informed.</p>
                        <LearnMoreBtns />   
                    </div>
                    <div className="image_content">
                        <img src="./src/images/itinerary-builder-screens.png" alt="itinerary builder screen image"/>
                    </div> 
                </div>

                <div className="resources_details" id="tailored_proposal_details">
                    <div className="image_content">
                        <img src="./src/images/tailored-proposal-screens.png" alt="tailored proposal screen image"/>
                    </div> 
                    <div className="text_content">
                        <div className="title">
                            <img src="./src/images/data-logo.svg" id="budget automation icon" className="icon"/>
                            <h4>Tailored proposal</h4>
                        </div>
                        <p>Deliver a truly professional experience to your clients with proposals that are complete, accurate, and personalized. All travel details, from budgets and itineraries to payment plans and pricing, are automatically transferred into a polished, ready-to-send document. Save hours of manual work, ensure consistency, and present every trip with confidence, impressing clients while streamlining your workflow.</p>
                        <LearnMoreBtns />   
                    </div>
                </div>
                    
                
                
            </div>
        </div>
    )
}

export default ResourcesDetails