import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import Bar from "../Bar";
import Multiplication from "../Multiplication";
import AddNewElementBtn from "../AddNewElementBtn";

function TransportationForm({index, transportationFormData, setTransportationFormData}) {

    const data = transportationFormData[index] || {
        typeOfVehicle: "",
        priceOfVehicle: "",
    };

    const addTransportationData = () =>
            setTransportationFormData([
                ...transportationFormData,
                {
                    typeOfVehicle: "",
                    priceOfVehicle: "",   
                }
            ])

    const updateValue = (key, value) => {
        const updated = [...transportationFormData];
        updated[index] = {...updated[index], [key]: value}
        setTransportationFormData(updated)
    };
        
    return (
        <section id="transportation_form_container">
            <Bar 
                barContent = {["Transportation"]}
            />
            <div className="transportation_form">
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
            </div>

            <div className="transportation_expenses_form">
                 <Bar 
                    barContent = {["Driver Expenses"]}
                />
                <div className="land">
                    <p>Land</p>
                    <TextBox />
                </div>
                <div className="meals">
                    <p>Meals</p>
                    <Multiplication />
                </div>
                <div className="accommodation">
                    <p>Accommodation</p>
                    <Multiplication />
                </div>
            </div>
            <AddNewElementBtn 
                onAdd={addTransportationData}
                text="Add another line"
            /> 
        </section>
    )
}

export default TransportationForm