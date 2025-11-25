import "../../index.css";
import TextBox from "../TextBox";
import OptionalButton from "../OptionalButton";
import Bar from "../Bar";
import AddNewElementBtn from "../AddNewElementBtn";
import Multiplication from "../Multiplication";

function TransportationForm({formIndex, updateTransportationData, priceOfVehicleContainer = [], multiplicationDriverMeals = [], multiplicationDriverAccommodation = [], addTransportationForm}) {
   
  return (
    <section id="transportation_form_container">
      <Bar barContent={["Transportation"]} />
      <div className="transportation_form">
        {priceOfVehicleContainer.map((data, index) => (
            <div key={index} className="transportatioin_vehicle_container">
                <TextBox 
                    value={data.typeOfVehicle}
                    onChange={(value) =>
                        updateTransportationData(formIndex, "priceOfVehicleContainer", "typeOfVehicle", index, value)
                    }
                />
                <TextBox 
                    value={data.priceOfVehicle}
                    onChange={(value) =>
                        updateTransportationData(formIndex, "priceOfVehicleContainer", "priceOfVehicle", index, value)
                    }
                    placeholder={"€"}
                />
            </div>
            ))}
        <div className="optional_button_container">
          <OptionalButton />
        </div>
      </div>

      <div id="driver_expenses_form">
            <div className="transportation_expenses_form">
                <Bar barContent={["Driver Expenses"]} />
                <div className="land">
                    <p>Land</p>
                    <TextBox />
                </div>
                <div className="meals">
                    <p>Meals</p>
                    {multiplicationDriverMeals.map((data, index) => (
                        <Multiplication 
                            key={index}
                            index={index}
                            data={data}
                            updateMultiplicationData={(key, value) =>
                                updateTransportationData(formIndex, "multiplicationDriverMeals", key, index, value) 
                            }
                        />
                    ))}
                </div>
                <div className="accommodation">
                    <p>Accommodation</p>
                    {multiplicationDriverAccommodation.map((data, index) => (
                        <Multiplication 
                            key={index}
                            index={index}
                            data={data}
                            updateMultiplicationData={(key, value) =>
                                updateTransportationData(formIndex, "multiplicationDriverAccommodation", key, index, value)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>

      <AddNewElementBtn
        onAdd={addTransportationForm}
        text="Add another line" 
      />
    </section>
  );
}

export default TransportationForm;