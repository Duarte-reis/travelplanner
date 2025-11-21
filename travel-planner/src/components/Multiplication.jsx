import "../index.css"
import TextBox from "./TextBox"


function Multiplication({index, data, updateMultiplicationData}) {

    const safe = data || { pricePerDay:"", numOfDays:"" };

    const price = parseFloat(safe.pricePerDay) || 0;
    const days = parseFloat(safe.numOfDays) || 0;
    
    const total = price * days;
    const totalDisplay = total + "€";

    return (
        <div id="multiplication">
            <TextBox
                value={safe.pricePerDay || ""}
                onChange={(value) => updateMultiplicationData("pricePerDay", index, value)}
                placeholder="€"
            />
            <p>x</p>
            <TextBox
                value={safe.numOfDays || ""}
                onChange={(value) => updateMultiplicationData("numOfDays", index, value)}
            />
            <p>=</p>
            <TextBox 
                value={totalDisplay} 
                readOnly 
            />
        </div>
    );
}

export default Multiplication