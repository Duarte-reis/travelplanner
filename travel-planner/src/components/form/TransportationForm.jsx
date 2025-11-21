import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function TransportationForm({index, transportationFormData, setTransportationFormData}) {

    const data = transportationFormData[index] || {
        typeOfVehicle: "",
        priceOfVehicle: "",
    };

    const updateValue = (key, value) => {
        const updated = [...transportationFormData];
        updated[index] = {...updated[index], [key]: value}
        setTransportationFormData(updated)
    };
        
    return (
        <section id="transportation_form">
            <TextBox
                value={data.typeOfVehicle || ""}
                onChange={(value) => updateValue("typeOfVehicle", value)}
            />
            <TextBox
                value={data.priceOfVehicle || ""}
                onChange={(value) => updateValue("priceOfVehicle", value)}
                placeholder="€"
            />
            <div className="optional_button_container">
                <OptionalButton />
            </div>
        </section>
    )
}

export default TransportationForm