import "../../index.css"
import TextBox from "../TextBox"
import CheckButton from "../CheckButton"
import Selector from "../Selector"

function FlightTrainForm({
    formIndex, 
    updateFlightTrainFormData, 
    flightOrTrainSelectorContainer = [], 
    companyContainer = [], 
    routeContainer = [], 
    fareContainer = [], 
    taxContainer = [], 
    checkButtonContainer = [], 
    flightTrainGuideSelectorContainer = []
}) {

    const selectFlightTrain = [
        {value:"", label:"Flight/Train", disabled: true},
        {value:"Flight", label:"Flight"},
        {value:"Train", label:"Train"}
    ]

    const guideSelector = [
        {value:"", label:"Guide", disabled: true}, 
        {value:"Guide: Yes", label:"Guide: Yes"}, 
        {value:"Guide: No", label:"Guide: No"} ]
    
    return (
        <section id="flight_train_form">
            <div className="flight_tain_type_company">
                {flightOrTrainSelectorContainer.map((data, index) => (
                    <Selector 
                        key={index}
                        value={data.flightOrTrainSelector}
                        options={selectFlightTrain}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "flightOrTrainSelectorContainer", "flightOrTrainSelector", index, value)}
                    />
                ))}
                {companyContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.company}
                        placeholder={"Company"}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "companyContainer", "company", index, value)}
                    />
                ))}
            </div>
            <div className="flight_tain_route">
                {routeContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.route}
                        placeholder={"Route"}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "routeContainer", "route", index, value)}
                    />
                ))}
            </div>
            <div className="flight_tain_price_container">
                {fareContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.fare}
                        placeholder={"Fare €"}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "fareContainer", "fare", index, value)}
                    />
                ))}
                {taxContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.tax}
                        placeholder={"Tax €"}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "taxContainer", "tax", index, value)}
                    />
                ))}
            </div>
            <div className="selector_optionalbtn_container">
                {flightTrainGuideSelectorContainer.map((data, index) => (
                    <Selector 
                        key={index}
                        value={data.flightTrainGuideSelector}
                        options={guideSelector}
                        onChange={(value) => updateFlightTrainFormData(formIndex, "flightTrainGuideSelectorContainer", "flightTrainGuideSelector", index, value)}
                    />
                ))}
                {checkButtonContainer.map((data, index) => (
                    <CheckButton
                        key={index}
                        active={data.checkButton}
                        onToggle={() =>
                        updateFlightTrainFormData(formIndex, "checkButtonContainer", "checkButton", index, !data.checkButton)
                        }
                    />
                ))}
            </div>
        </section>
    )
}

export default FlightTrainForm