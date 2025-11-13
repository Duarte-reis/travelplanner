import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function ActivitiesForm() {
    return (
        <section id="activities_form">
                <TextBox />
                <TextBox />
                <TextBox />
                <OptionalButton />
        </section>
    )
}

export default ActivitiesForm