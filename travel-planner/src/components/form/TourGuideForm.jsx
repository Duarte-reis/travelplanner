import "../../index.css";
import Multiplication from "../Multiplication";
import OptionalButton from "../OptionalButton";

function TourGuideForm({ formIndex, multiplicationData = [], updateMultiplicationData }) {

    return (
        <section id="tour_guide_form">
            <div className="price_container">
                {multiplicationData.map((data, index) => (
                    <Multiplication
                        key={index}
                        index={index}
                        data={data}
                        updateMultiplicationData={(key, i, value) =>
                            updateMultiplicationData(formIndex, key, i, value)
                        }
                    />
                ))}
                <div className="optional_button_container">
                    <OptionalButton />
                </div>
            </div>
        </section>
    );
}

export default TourGuideForm