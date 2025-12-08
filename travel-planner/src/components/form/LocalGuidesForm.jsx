import "../../index.css"
import TextBox from "../TextBox"
import CheckButton from "../CheckButton"

function LocalGuidesForm({formIndex, updateLocalGuidesFormData, countryInitialsContainer = [], serviceNameContainer = [], price1Container = [], price2Container = [], price3Container = [], price4Container = [], price5Container = [], price6Container = [], price7Container = [], checkButtonContainer = []}) {

    return (
        <section id="local_guides_form">
            <div className="type_of_service">
                {countryInitialsContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.countryInitials}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "countryInitialsContainer", "countryInitials", index, value)}
                    />

                ))}
                {serviceNameContainer.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.serviceName}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "serviceNameContainer", "serviceName", index, value)}
                    />
                ))}
            </div>
            <div className="price_tier_container">
                {price1Container.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.price1}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "price1Container", "price1", index, value)}
                    />
                ))}
                {price2Container.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.price2}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "price2Container", "price2", index, value)}
                    />
                ))}
                {price3Container.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.price3}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "price3Container", "price3", index, value)}
                    />
                ))}
                {price4Container.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.price4}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "price4Container", "price4", index, value)}
                    />
                ))}
                {price5Container.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.price5}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "price5Container", "price5", index, value)}
                    />
                ))}
                {price6Container.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.price6}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "price6Container", "price6", index, value)}
                    />
                ))}
                {price7Container.map((data, index) => (
                    <TextBox 
                        key={index}
                        value={data.price7}
                        onChange={(value) => updateLocalGuidesFormData(formIndex, "price7Container", "price7", index, value)}
                    />
                ))}
            </div>
            {checkButtonContainer.map((data, index) => (
                <CheckButton
                    key={index}
                    active={data.checkButton}
                    onToggle={() =>
                        updateLocalGuidesFormData(formIndex, "checkButtonContainer", "checkButton", index, !data.checkButton)
                    }
                />
            ))}
        </section>
    )
}

export default LocalGuidesForm