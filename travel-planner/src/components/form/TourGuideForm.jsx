import "../../index.css"
import MultiplicationResult from "../MultiplicationResult"
import OptionalButton from "../OptionalButton"

function TourGuideForm() {
    return (
        <section id="tour_guide_form">
            <div className="price_container">
                <MultiplicationResult />
                <div className="optional_button_container">
                    <OptionalButton />
                </div>
            </div>
        </section>
    )
}

export default TourGuideForm