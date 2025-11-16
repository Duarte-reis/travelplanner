import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function ActivitiesForm() {
    return (
        <section id="activities_form">
                <div className="choose_country">
                    <TextBox />
                </div>
                <div className="activity_name">
                    <TextBox />
                </div>
                <div className="activity_price">
                    <TextBox />
                </div>
                <div className="optional_button_container">
                    <OptionalButton />
                </div>
        </section>
    )
}

export default ActivitiesForm