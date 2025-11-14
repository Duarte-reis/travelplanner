import "../../index.css"
import TextBox from "../TextBox"
import Selector from "../Selector"

function FormHeader() {
    return (
        <section id="form_header_container">
            <h3>Title</h3>
            <div className="form_header_content_container">
                <div className="form_header_content">
                    <div className="top_section">
                        <TextBox />
                        <TextBox />
                        <TextBox />
                    </div> 
                    <div className="middle_section">
                        <TextBox />
                        <TextBox />
                        <TextBox />
                    </div>  
                    <div className="bottom_section">
                        <TextBox />
                        <Selector />
                        <Selector />
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