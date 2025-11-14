import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import Selector from "../Selector"

function FlightTrainForm() {
    return (
        <section id="flight_train_form">
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <Selector />
                <OptionalButton />
        </section>
    )
}

export default FlightTrainForm