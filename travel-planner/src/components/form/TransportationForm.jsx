import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function TransportationForm() {
    return (
        <section id="transportation_form">
            <TextBox />
            <TextBox />
            <div className="optional_button_container">
                <OptionalButton />
            </div>
        </section>
    )
}

export default TransportationForm