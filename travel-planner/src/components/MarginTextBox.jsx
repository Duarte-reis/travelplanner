import "../index.css"
import TextBox from "./TextBox"

function MarginTextBox({profitMargin, setProfitMargin, amount}) {

    return (
        <div id="margin_text_box">
            <TextBox
                value={profitMargin}
                onChange={(e) => setProfitMargin(e.target.value)}
            />
                <p>%</p>
            <TextBox 
                value={amount + "€"}
                readOnly
            />
        </div>
    )
}

export default MarginTextBox