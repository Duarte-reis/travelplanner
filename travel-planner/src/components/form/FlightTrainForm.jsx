import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import Selector from "../Selector"

function FlightTrainForm({formIndex, updateFlightTrainFormData, companyContainer = [], routeContainer = [], fareContainer = [], taxContainer = [], flightTrainGuideSelectorContainer = []}) {

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
                {companyContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.company}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "companyContainer", "company", index, value)}
                    />
                ))}
            </div>
            <div className="flight_tain_route">
                {routeContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.route}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "routeContainer", "route", index, value)}
                    />
                ))}
            </div>
            <div className="flight_tain_price_container">
                {fareContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.fare}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "fareContainer", "fare", index, value)}
                    />
                ))}
                {taxContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.tax}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "taxContainer", "tax", index, value)}
                    />
                ))}
            </div>
            <div className="selector_optionalbtn_container">
                {flightTrainGuideSelectorContainer.map((data, index) => (
                    <Selector 
                        key={index}
                        value={data.flightTrainGuideSelector}
                        onChange={(value) => updateFlightTrainFormData(formIndex,                 "flightTrainGuideSelectorContainer", "flightTrainGuideSelector", index, value)}
                    />
                ))}
                <OptionalButton />
            </div>
        </section>
    )
}

export default FlightTrainForm