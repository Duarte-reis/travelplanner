import "../../index.css"
import FormHeaderContent from "./FromHeaderContent"

function FormHeader() {
    return (
        <section id="form_header_container">
            <h3>Budget Form</h3>
            <div className="form_header_content">
                <FormHeaderContent />
            </div>
        </section>
    )
}

export default FormHeader