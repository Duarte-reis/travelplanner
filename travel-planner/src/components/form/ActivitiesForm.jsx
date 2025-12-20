import "../../index.css"
import TextBox from "../TextBox"
import CheckButton from "../CheckButton"

function ActivitiesForm({
  formIndex, 
  nameOfActivityContainer = [], 
  pricePerPersonContainer = [], 
  checkButtonContainer = [], 
  updateActivityField
}) {

  return (
    <section id="activities_form">
      <div className="activity_name">
        {nameOfActivityContainer.map((data, index) => (
          <TextBox 
            key={index}
            value={data.nameOfActivity}
            placeholder={"Name"}
            onChange={(value) => updateActivityField(formIndex, "nameOfActivityContainer", "nameOfActivity", index, value)}
          />
        ))}
      </div>

      <div className="activity_price">
        {pricePerPersonContainer.map((data, index) => (
          <TextBox 
            key={index}
            value={data.pricePerPerson}
            placeholder={"€"}
            onChange={(value) => updateActivityField(formIndex, "pricePerPersonContainer", "pricePerPerson", index, value)}
          />
        ))}
      </div>

      {checkButtonContainer.map((data, index) => (
          <CheckButton
            key={index}
            active={data.checkButton}
            onToggle={() =>
              updateActivityField(formIndex, "checkButtonContainer", "checkButton", index, !data.checkButton)
            }
          />
        ))}
        
    </section>
  )
}

export default ActivitiesForm