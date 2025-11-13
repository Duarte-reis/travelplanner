import "../../index.css"
import BudgetNumber from "./BudgetNumber"
import LanguageDropDown from "./LanguageDropDown"
import CurrencyDropDown from "./CurrencyDropDown"

function FormHeaderContent() {
    return (
            <div className="form_header_content_container">
                <div className="date_container">
                    <input type="number" name="year" placeholder="Year" value="" className="content_box"/>
                    <input type="number" name="start date" placeholder="Start Date" value="" className="content_box"/>
                    <input type="number" name="end date" placeholder="End Date" value="" className="content_box"/>
                </div>
    
                <div className="select_text_box">
                    <input type="text" name="destination" placeholder="Destination" value="" className="content_box"/>
                    <input type="text" name="group" placeholder="Group" value="" className="content_box"/>
                    <input type="text" name="client" placeholder="Client" value="" className="content_box"/>
                    <input type="text" name="trip title" placeholder="Trip Title" value="" className="content_box"/>
                    <LanguageDropDown />
                    <CurrencyDropDown />
                </div>
            </div>
    )
}

export default FormHeaderContent