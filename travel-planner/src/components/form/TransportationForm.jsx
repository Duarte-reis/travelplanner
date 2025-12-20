import "../../index.css";
import TextBox from "../TextBox";
import Bar from "../Bar";
import AddNewElementBtn from "../AddNewElementBtn";
import Multiplication from "../Multiplication";
import CheckButton from "../CheckButton";

function TransportationForm({
    formIndex,
    updateTransportationData, 
    priceOfVehicleContainer = [], 
    multiplicationDriverMeals = [], 
    driverLandExpensesContainer = [], 
    multiplicationDriverAccommodation = [], 
    checkButtonContainer = [], 
    addTransportationForm, 
    hotelExpenses
}) {
   
  return (
    <section id="transportation_form_container">
        <Bar barContent={["Transportation"]} />
            <div className="transportation_form">
                {priceOfVehicleContainer.map((data, index) => (
                    <div key={index} className="transportation_vehicle_container">
                        <TextBox 
                            value={data.typeOfVehicle}
                            placeholder={"Vehicle type"}
                            onChange={(value) =>
                                updateTransportationData(
                                    formIndex, 
                                    "priceOfVehicleContainer", 
                                    "typeOfVehicle", 
                                    index, 
                                    value
                                )
                            }
                        />
                        <TextBox 
                            value={data.priceOfVehicle}
                            onChange={(value) =>
                                updateTransportationData(
                                    formIndex, 
                                    "priceOfVehicleContainer", 
                                    "priceOfVehicle", 
                                    index, 
                                    value
                                )
                            }
                            placeholder={"€"}
                        />
                    </div>
                ))}
                {checkButtonContainer.map((data, index) => (
                    <CheckButton
                        key={index}
                        active={data.checkButton}
                        onToggle={() =>
                            updateTransportationData(
                                formIndex,
                                "checkButtonContainer",
                                "checkButton",
                                index,
                                !data.checkButton
                            )
                        }
                    />
                ))}
            </div>

        <div id="driver_expenses_form">
            <div className="transportation_expenses_form">
                <Bar barContent={["Driver Expenses"]} />
                <div className="land">
                    <p>Land</p>
                    {driverLandExpensesContainer.map((data, index) => (
                        <TextBox 
                            key={index}
                            index={index}
                            value={hotelExpenses ? hotelExpenses + "€" : "0€"}
                            readOnly
                        />
                    ))}
                </div>
                <div className="meals">
                    <p>Meals</p>
                    {multiplicationDriverMeals.map((data, index) => (
                        <Multiplication 
                            key={index}
                            index={index}
                            data={data}
                            placeholder={"Meals"}
                            updateMultiplicationData={(key, value) =>
                                updateTransportationData(
                                    formIndex, 
                                    "multiplicationDriverMeals", 
                                    key, 
                                    index, 
                                    value
                                ) 
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
                            placeholder={"Nights"}
                            updateMultiplicationData={(key, value) =>
                                updateTransportationData(
                                    formIndex, 
                                    "multiplicationDriverAccommodation", 
                                    key, 
                                    index, 
                                    value
                                )
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