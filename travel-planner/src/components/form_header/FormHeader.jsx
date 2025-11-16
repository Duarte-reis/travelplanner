import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector"

const language = [
    {value: "English", label: "English"},
    {value: "Portuguese", label: "Portuguese"},
    {value: "Spanish", label: "Spanish"}
]

const currency = [
    {value:"EUR €", label:"EUR €"},
    {value:"Dollar $", label:"Dollar $"},
]

function FormHeader() {
    return (
        <section id="form_header_container">
            <h3>Title</h3>
            <div className="form_header_content_container">
                <div className="form_header_content">
                    <div className="top_section">
                        <div className="text_content">
                            <TextBox />
                            <TextBox />
                            <TextBox />
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
                        <TextBox />
                        <TextBox />
                        <TextBox />
                    </div>  
                    <div className="bottom_section">
                        
                        <TextBox />
                    </div>   
                </div>
                <div className="empty_box">
                    <TextBox />
                </div>
            </div>
        </section>
    )
}

export default FormHeader