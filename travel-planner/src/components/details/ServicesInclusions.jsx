import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector"

function ServicesInclusions() {
    return (
        <section id="services_inclusions">
            <div className="transportation_tour_guide_line">
                <div className="transportation_inclusions">
                    <p>Transportation:</p>
                    <Selector />
                    <TextBox />
                </div>
                <div className="tour_guide_inclusions">
                    <p>Guide:</p>
                    <Selector />
                    <TextBox />
                </div>
            </div>

            <div className="flights_train_line">
                <div className="flights_inclusions">
                    <p>Flights:</p>
                    <Selector />
                    <TextBox />
                </div>
                <div className="train_inclusions">
                    <p>Train:</p>
                    <Selector />
                    <TextBox />
                </div>
            </div>

            <div className="local_guides_line">
                <p>Local Guides:</p>
                <Selector />
                <TextBox />
            </div>

            <div className="activities_line">
                <p>Activities:</p>
                <Selector />
                <TextBox />
            </div>

            <div className="headsets_gratuities_line">
                <div className="headsets_inclusions">
                    <p>Headsets:</p>
                    <Selector />
                    <TextBox />
                </div>
                <div className="gratuities_inclusions">
                    <p>Gratuities:</p>
                    <Selector />
                    <TextBox />
                </div>
            </div>
        </section>
    )
}

export default ServicesInclusions