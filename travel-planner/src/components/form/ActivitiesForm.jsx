import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function ActivitiesForm({index, activitiesFormData, setActivitiesFormData}) {

    const data = activitiesFormData[index] || {
        country:"",
        nameOfActivity:"",
        pricePerPerson:""
    };

    const updateValue = (key, value) => {
        const updated = [...activitiesFormData];
        updated[index] = {...updated[index], [key]: value};
        setActivitiesFormData(updated)
    };

    return (
        <section id="activities_form">
                <div className="choose_country">
                    <TextBox 
                        value={data.country || ""}
                        onChange={(value) => updateValue("country", value)}
                    />
                </div>
                <div className="activity_name">
                    <TextBox 
                        value={data.nameOfActivity || ""}
                        onChange={(value) => updateValue("nameOfActivity", value)}
                    />
                </div>
                <div className="activity_price">
                    <TextBox
                        value={data.pricePerPerson || ""}
                        onChange={(value) => updateValue("pricePerPerson", value)}
                        placeholder="€"
                    />
                </div>
                <div className="optional_button_container">
                    <OptionalButton />
                </div>
        </section>
    )
}

export default ActivitiesForm