import "../index.css"
import TextBox from "./TextBox"
import OptionalButton from "./OptionalButton"

function SelectPaxAndFree({numOfPax, free}) {
    return (
        <section id="select_pax_and_free">
            <div className="pax_and_free">
                <TextBox 
                    value={numOfPax}
                    readOnly
                />
                <p>Pax</p>
                <p>+</p>
                <TextBox 
                    value={free}
                    readOnly
                />
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