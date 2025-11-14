import "../index.css"
import TextBox from "./TextBox"
import OptionalButton from "./OptionalButton"
import Multiplication from "./Multiplication"

function MultiplicationResult() {
    return (
        <section id="multiaplication_result">
            <Multiplication />
            <p>=</p>
            <TextBox />
        </section>
    )
}

export default MultiplicationResult