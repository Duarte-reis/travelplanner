import "../index.css"
import TextBox from "./TextBox"


function MarginTextBox() {
    return (
        <div id="margin_text_box">
            <TextBox />
                <p>%</p>
            <TextBox />
        </div>
    )
}

export default MarginTextBox