import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FormHeader({pageTitle}) {

    const { formHeaderValues, setFormHeaderValues } = useContext(CounterContext);

    const language = [
        {value: "English", label: "English"},
        {value: "Portuguese", label: "Portuguese"},
        {value: "Spanish", label: "Spanish"}
    ]

    const currency = [
        {value:"EUR €", label:"EUR €"},
        {value:"Dollar $", label:"Dollar $"},
    ]

    const updateValue = (section, key, value) => {
        setFormHeaderValues({
            ...formHeaderValues,
            [section]: { 
            ...formHeaderValues[section],
            [key]: value
            }
        });
    };

    return (
        <section id="form_header_container">
            <h3 className="page_title">{pageTitle}</h3>
            <div className="form_header_content_container">
                <div className="form_header_content">
                    <div className="top_section">
                        <div className="text_content">
                            <TextBox 
                                value={formHeaderValues.topSection.year || ""}
                                onChange={(value) => updateValue("topSection", "year", value)}
                                placeholder = "Year"
                            />
                            <TextBox 
                                value={formHeaderValues.topSection.startDate || ""}
                                onChange={(value) => updateValue("topSection", "startDate", value)}
                                placeholder = "Start date"
                            />
                            <TextBox 
                                value={formHeaderValues.topSection.endDate || ""}
                                onChange={(value) => updateValue("topSection", "endDate", value)}
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
                            value={formHeaderValues.middleSection.destination || ""}
                            onChange={(value) => updateValue("middleSection", "destination", value)}
                            placeholder = "Destination"
                        />
                        <TextBox 
                            value={formHeaderValues.middleSection.groupName || ""}
                            onChange={(value) => updateValue("middleSection", "groupName", value)}
                            placeholder = "Group name" 
                        />
                        <TextBox 
                            value={formHeaderValues.middleSection.clientName || ""}
                            onChange={(value) => updateValue("middleSection", "clientName", value)}
                            placeholder = "Client name" 
                        />
                    </div>

                    <div className="bottom_section">
                        <TextBox 
                            value={formHeaderValues.bottomSection.tripTitle || ""}
                            onChange={(value) => updateValue("bottomSection", "tripTitle", value)}
                            placeholder = "Trip title" 
                        />
                    </div>   
                </div>

                <div className="notes_box">
                    <TextBox 
                        value={formHeaderValues.notesSection.notes || ""}
                        onChange={(value) => updateValue("notesSection", "notes", value)}
                        placeholder = "Notes" 
                    />
                </div>
            </div>
        </section>
    )
}

export default FormHeader