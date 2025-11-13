import "../../index.css"

function LanguageDropDown() {
    return (
        <div className="content_box" id="form_header_language_dropdown">
            <form action="/change-language" method="get">
                <label value="language" className="sr-only">Language:</label>
                    <select name="language" id="language" className="selector_dropdown">
                        <option value="en">English</option>
                        <option value="pt">Portuguese</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
            </form>
        </div>
    )
}

export default LanguageDropDown