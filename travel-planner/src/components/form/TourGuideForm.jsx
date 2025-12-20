import "../../index.css" 
import Multiplication from "../Multiplication" 
import CheckButton from "../CheckButton"; 
import Bar from "../Bar" 
import TextBox from "../TextBox"; 
import AddNewElementBtn from "../AddNewElementBtn";

function TourGuideForm({ 
  formIndex, 
  multiplicationPrice = [], 
  multiplicationMeals = [], 
  multiplicationAccommodation = [], 
  guideLandExpensesContainer = [], 
  checkButtonContainer = [], 
  updateMultiplicationData, 
  addTourGuideForm, 
  hotelExpenses, 
  flightTrainGuideExpenses 
}) {

  return (
    <section id="tour_guide_form">
      <Bar barContent={["Tour Guide"]} />
      <div className="price_container">
        {multiplicationPrice.map((data, index) => (
          <Multiplication
            key={index}
            index={index}
            data={data}
            placeholder={"Days"}
            updateMultiplicationData={(key, value) =>
              updateMultiplicationData(
                formIndex, 
                "multiplicationPrice", 
                key, 
                index, 
                value
              )
            }
          />
        ))}
        {checkButtonContainer.map((data, index) => (
          <CheckButton
              key={index}
              active={data.checkButton}
              onToggle={() =>
                  updateMultiplicationData(
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

      <div className="tour_guide_expenses_form">
        <Bar barContent={["Guide Expenses"]} />
          <div className="land">
            <p>Land</p>
            {guideLandExpensesContainer.map((data, index) => (
              <TextBox 
                key={index}
                index={index}
                value={`${Number(hotelExpenses || 0) + Number(flightTrainGuideExpenses || 0)}€`}
                readOnly
              />
            ))}
          </div>

        <div className="meals">
          <p>Meals</p>
          {multiplicationMeals.map((data, index) => (
            <Multiplication
              key={index}
              index={index}
              data={data}
              placeholder={"Meals"}
              updateMultiplicationData={(key, value) =>
                updateMultiplicationData(
                  formIndex, 
                  "multiplicationMeals", 
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
          {multiplicationAccommodation.map((data, index) => (
            <Multiplication
              key={index}
              index={index}
              data={data}
              placeholder={"Nights"}
              updateMultiplicationData={(key, value) =>
                updateMultiplicationData(
                  formIndex, 
                  "multiplicationAccommodation", 
                  key, 
                  index, 
                  value
                )
              }
            />
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