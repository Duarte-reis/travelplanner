import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function ActivitiesForm({formIndex, activitiesFormData, setActivitiesFormData, countryContainer = [], nameOfActivityContainer = [], pricePerPersonContainer = [], updateActivityField}) {

  /*const countries = countryContainer.length ? countryContainer : [{ country: "" }];
  const activities = nameOfActivityContainer.length ? nameOfActivityContainer : [{ nameOfActivity: "" }];
  const prices = pricePerPersonContainer.length ? pricePerPersonContainer : [{ pricePerPerson: "" }];*/

  return (
    <section id="activities_form">
      <div className="choose_country">
        {countryContainer.map((data, index) => (
          <TextBox
              key={index}
              value={data.country}
              onChange={(value) => updateActivityField(formIndex, "countryContainer", "country", index, value)}
          />
        ))}

        
      </div>

      <div className="activity_name">
        {nameOfActivityContainer.map((data, index) => (
          <TextBox 
            key={index}
            value={data.nameOfActivity}
            onChange={(value) => updateActivityField(formIndex, "nameOfActivityContainer", "nameOfActivity", index, value)}
          />
        ))}
      </div>

      <div className="activity_price">
        {pricePerPersonContainer.map((data, index) => (
          <TextBox 
            key={index}
            value={data.pricePerPerson}
            onChange={(value) => updateActivityField(formIndex, "pricePerPersonContainer", "pricePerPerson", index, value)}
          />
        ))}
      </div>

      <div className="optional_button_container">
        <OptionalButton />
      </div>
    </section>
  )
}

export default ActivitiesForm