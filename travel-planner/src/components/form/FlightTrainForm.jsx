import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import YesNoDropDown from "../YesNoDropDown"

function FlightTrainForm() {
    return (
        <section id="flight_train_form">
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <YesNoDropDown />
                <OptionalButton />
        </section>
    )
}

export default FlightTrainForm