import "../index.css"
import TextBox from "./TextBox"
import OptionalButton from "./OptionalButton"

function SelectPaxAndFree() {
    return (
        <section id="select_pax_and_free">
            <div className="pax_and_free">
                <TextBox />
                <p>Pax</p>
                <p>+</p>
                <TextBox />
                <p>Free</p>
            </div>

            <div className="include">
                <p>Include:</p>
                <p>Price</p>
                <OptionalButton />
                <p>Free</p>
                <OptionalButton />
            </div>
        </section>
    )
}

export default SelectPaxAndFree