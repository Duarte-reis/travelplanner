import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import Selector from "../Selector"

function FlightTrainForm() {

    const selectFlightTrain = [
        {value:"", label:""},
        {value:"Flight", label:"Flight"},
        {value:"Train", label:"Train"}
    ]
    
    return (
        <section id="flight_train_form">
            <div className="flight_tain_type_company">
                <Selector 
                    options={selectFlightTrain}
                    defaultValue=""
                    className="flight_train_selector"
                />
                <TextBox />
            </div>
            <div className="flight_tain_route">
                <TextBox />
            </div>
            <div className="flight_tain_price_container">
                <TextBox />
                <TextBox />
            </div>
            <div className="selector_optionalbtn_container">
                <Selector />
                <OptionalButton />
            </div>
        </section>
    )
}

export default FlightTrainForm