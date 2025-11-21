import "../index.css"
import TextBox from "./TextBox"

function ComissionTextBox() {
    return (
        <div id="comission_text_box">
            <TextBox />
                <p>%</p>
            <TextBox />
        </div>
    )
}

export default ComissionTextBox