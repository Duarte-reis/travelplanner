import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function LocalGuidesForm() {
    return (
        <section id="local_guides_form">
            <div className="type_of_service">
                <TextBox />
                <TextBox />
            </div>
            <div className="price_tier_container">
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
            </div>
                <OptionalButton />
        </section>
    )
}

export default LocalGuidesForm