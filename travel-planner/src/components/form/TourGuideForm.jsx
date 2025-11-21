import "../../index.css";
import Multiplication from "../Multiplication";
import OptionalButton from "../OptionalButton";
import Bar from "../Bar";
import TextBox from "../TextBox";
import AddNewElementBtn from "../AddNewElementBtn";

function TourGuideForm({formIndex, multiplicationData = [], updateMultiplicationData, tourGuideFormData, setTourGuideFormData}) {

    const addTourGuideForm = () => {
        setTourGuideFormData([
            ...tourGuideFormData,
            {
                multiplicationData: [{pricePerDay:"", numOfDays:""}]
            }
        ])
    }

    return (
        <section id="tour_guide_form">
            <Bar 
                barContent = {["Tour Guide"]}
            />
            <div className="price_container">
                {multiplicationData.map((data, index) => (
                    <Multiplication
                        key={index}
                        index={index}
                        data={data}
                        updateMultiplicationData={(key, i, value) =>
                            updateMultiplicationData(formIndex, key, i, value)
                        }
                    />
                ))}
                <div className="optional_button_container">
                    <OptionalButton />
                </div>
            </div>

            <div className="tour_guide_expenses_form">
                 <Bar 
                    barContent = {["Guide Expenses"]}
                />
                <div className="land">
                    <p>Land</p>
                    <TextBox />
                </div>
                <div className="meals">
                    <p>Meals</p>
                    {multiplicationData.map((data, index) => (
                        <Multiplication
                            key={index}
                            index={index}
                            data={data}
                            updateMultiplicationData={(key, i, value) =>
                                updateMultiplicationData(formIndex, key, i, value)
                            }
                        />
                    ))}
                </div>
                <div className="accommodation">
                    <p>Accommodation</p>
                    {multiplicationData.map((data, index) => (
                        <Multiplication
                            key={index}
                            index={index}
                            data={data}
                            updateMultiplicationData={(key, i, value) =>
                                updateMultiplicationData(formIndex, key, i, value)} />
                    ))}
                </div>
            </div>
            <AddNewElementBtn 
                onAdd={addTourGuideForm}
                text="Add another line"
            /> 
        </section>
    );
}

export default TourGuideForm