import "../../index.css"
import TextBox from "../TextBox"
import Bar from "../Bar"
import Multiplication from "../Multiplication"

function DriverExpensesForm({formIndex, multiplicationDriverMeals = [], multiplicationDriverAccommodation = [], updateMultiplicationDriverData}) {
    
    return (
        <section id="driver_expenses_form">
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
                                updateMultiplicationDriverData(formIndex, "multiplicationDriverMeals", key, index, value)
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
                                updateMultiplicationDriverData(formIndex, "multiplicationDriverAccommodation", key, index, value)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DriverExpensesForm