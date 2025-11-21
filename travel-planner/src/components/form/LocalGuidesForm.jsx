import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"

function LocalGuidesForm({index = -1, localGuidesFormData, setLocalGuidesFormData}) {

    const data = localGuidesFormData[index] || {
            country: "",
            service:"",
            price1:"",
            price2:"",
            price3:"",
            price4:"",
            price5:"",
            price6:"",
            price7:"",
    }

    const updateValue = (key, value) => {
        const updated = [...localGuidesFormData];
        updated[index] = {...updated[index], [key]: value};
        setLocalGuidesFormData(updated)
    }

    return (
        <section id="local_guides_form">
            <div className="type_of_service">
                <TextBox 
                    value={data.country || ""}
                    onChange={(value) => updateValue("country", value)}
                />
                <TextBox 
                    value={data.service || ""}
                    onChange={(value) => updateValue("service", value)}
                />
            </div>
            <div className="price_tier_container">
                <TextBox 
                    value={data.price1 || ""}
                    onChange={(value) => updateValue("price1", value)}
                    placeholder="€"
                />
                <TextBox 
                    value={data.price2 || ""}
                    onChange={(value) => updateValue("price2", value)}
                    placeholder="€"
                />
                <TextBox 
                    value={data.price3 || ""}
                    onChange={(value) => updateValue("price3", value)}
                    placeholder="€"
                />
                <TextBox 
                    value={data.price4 || ""}
                    onChange={(value) => updateValue("price4", value)}
                    placeholder="€"
                />
                <TextBox 
                    value={data.price5 || ""}
                    onChange={(value) => updateValue("price5", value)}
                    placeholder="€"
                />
                <TextBox 
                    value={data.price6 || ""}
                    onChange={(value) => updateValue("price6", value)}
                    placeholder="€"
                />
                <TextBox 
                    value={data.price7 || ""}
                    onChange={(value) => updateValue("price7", value)}
                    placeholder="€"
                />
                
            </div>
            
            <div className="optional_button_container">
                <OptionalButton />
            </div>
        </section>
    )
}

export default LocalGuidesForm