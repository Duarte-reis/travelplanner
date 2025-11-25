import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import Selector from "../Selector"
import { useEffect } from "react"

function FlightTrainForm({index = -1, flightTrainFormData, setFlightTrainFormData, sendTotalToNet}) {

    const data = flightTrainFormData[index] || {
        company:"",
        route:"",
        fare:"",
        tax:"",
    };

    const updateValue = (key, value) => {
        const updated = [...flightTrainFormData];
        updated[index] = {...updated[index], [key]: value}
        setFlightTrainFormData(updated)
    }

    const selectFlightTrain = [
        {value:"", label:""},
        {value:"Flight", label:"Flight"},
        {value:"Train", label:"Train"}
    ]

    const total =
        (parseFloat(data.fare) || 0) +
        (parseFloat(data.tax) || 0); 

    useEffect(() => {
        if (sendTotalToNet) {
            sendTotalToNet(total);
        }
    }, [total, sendTotalToNet]);
    
    return (
        <section id="flight_train_form">
            <div className="flight_tain_type_company">
                <Selector 
                    options={selectFlightTrain}
                    defaultValue=""
                    className="flight_train_selector"
                />
                <TextBox 
                    value={data.company || ""}
                    onChange={(value) => updateValue("company", value)}
                />
            </div>
            <div className="flight_tain_route">
                <TextBox 
                    value={data.route || ""}
                    onChange={(value) => updateValue("route", value)}
                />
            </div>
            <div className="flight_tain_price_container">
                <TextBox 
                    value={data.fare || ""}
                    onChange={(value) => updateValue("fare", value)}
                    placeholder="€"
                />
                <TextBox
                    value={data.tax || ""}
                    onChange={(value) => updateValue("tax", value)}
                    placeholder="€"
                />
            </div>
            <div className="selector_optionalbtn_container">
                <Selector />
                <OptionalButton />
            </div>
        </section>
    )
}

export default FlightTrainForm