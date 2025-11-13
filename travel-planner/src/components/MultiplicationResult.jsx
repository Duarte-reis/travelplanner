import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import Multiplication from "../Multiplication"

function MultiplicationResult() {
    return (
        <section id="tour_guide_form">
            <div className="price_container">
                <Multiplication />
                <p>=</p>
                <TextBox />
                <OptionalButton />
            </div>
        </section>
    )
}

export default MultiplicationResult