import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import { useEffect } from "react";

function ActivitiesForm({formIndex, activitiesFormData, setActivitiesFormData, countryContainer = [], nameOfActivityContainer = [], pricePerPersonContainer = [], updateActivityField, sendTotalToNet}) {

  const countries = countryContainer.length ? countryContainer : [{ country: "" }];
  const activities = nameOfActivityContainer.length ? nameOfActivityContainer : [{ nameOfActivity: "" }];
  const prices = pricePerPersonContainer.length ? pricePerPersonContainer : [{ pricePerPerson: "" }];

  return (
    <section id="activities_form">
      <div className="choose_country">
        {countries.map((item, index) => (
          <TextBox
            key={index}
            value={item.country}
            onChange={(value) =>
              updateActivityField(formIndex, "countryContainer", "country", index, value)
            }
          />
        ))}
      </div>

      <div className="activity_name">
        {activities.map((item, index) => (
          <TextBox
            key={index}
            value={item.nameOfActivity}
            onChange={(value) =>
              updateActivityField(formIndex, "nameOfActivityContainer", "nameOfActivity", index, value)
            }
          />
        ))}
      </div>

      <div className="activity_price">
        {prices.map((item, index) => (
          <TextBox
            key={index}
            value={item.pricePerPerson}
            onChange={(value) => {
              updateActivityField(formIndex, "pricePerPersonContainer", "pricePerPerson", index, value);
            }}
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