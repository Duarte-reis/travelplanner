import "../../index.css"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import TextBox from "../TextBox"
import Selector from "../Selector"

function FormHeader({pageTitle}) {


    const language = [
        {value: "English", label: "English"},
        {value: "Portuguese", label: "Portuguese"},
        {value: "Spanish", label: "Spanish"}
    ]

    const currency = [
        {value:"EUR €", label:"EUR €"},
        {value:"Dollar $", label:"Dollar $"},
    ]

    const [values, setValues] = useLocalStorage("textBoxValues", {}); 
    const updateValue = (id, value) => {
        setValues({...values, [id]: value})
    }

    return (
        <section id="form_header_container">
            <h3 className="page_title">{pageTitle}</h3>
            <div className="form_header_content_container">
                <div className="form_header_content">
                    <div className="top_section">
                        <div className="text_content">
                            <TextBox 
                                value={values.year || ""}
                                onChange={(value) => updateValue("year", value)}
                                placeholder = "Year"
                            />
                            <TextBox 
                                value={values.startDate || ""}
                                onChange={(value) => updateValue("startDate", value)}
                                placeholder = "Start date"
                            />
                            <TextBox 
                                value={values.endDate || ""}
                                onChange={(value) => updateValue("endDate", value)}
                                placeholder = "End date"
                            />
                        </div>
                        <div className="selector_content">
                            <Selector 
                                options={language}
                                defaultValue=""
                                className="language_selector"
                            />
                            <Selector 
                                options={currency}
                                defaultValue=""
                                className="currency_selector"
                            />
                        </div>

                    </div> 
                    <div className="middle_section">
                        <TextBox 
                            value={values.destination || ""}
                            onChange={(value) => updateValue("destination", value)}
                            placeholder = "Destination"
                        />
                        <TextBox 
                            value={values.groupName || ""}
                            onChange={(value) => updateValue("groupName", value)}
                            placeholder = "Group name" 
                        />
                        <TextBox 
                            value={values.clientName || ""}
                            onChange={(value) => updateValue("clientName", value)}
                            placeholder = "Client name" 
                        />
                    </div>

                    <div className="bottom_section">
                        <TextBox 
                            value={values.tripTitle || ""}
                            onChange={(value) => updateValue("tripTitle", value)}
                            placeholder = "Trip title" 
                        />
                    </div>   
                </div>

                <div className="notes_box">
                    <TextBox 
                        value={values.notes || ""}
                        onChange={(value) => updateValue("notes", value)}
                        placeholder = "Notes" 
                    />
                </div>
            </div>
        </section>
    )
}

export default FormHeader