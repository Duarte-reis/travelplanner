import "../../index.css"

function HeaderLanguageDropDown() {
    return (
        <div className="selector_dropdown" id="header_language_dropdown">
            <img src="./src/images/web-icon.svg" alt="languages icon" />
            <form action="/change-language" method="get">
                <label value="language" className="sr-only">Language:</label>
                    <select name="language" id="language">
                        <option value="en">English</option>
                        <option value="pt">Portuguese</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
            </form>
                 
            <div className="flags">
                <img src="./src/images/uk-flag.svg" alt="English flag" className="flag-en" />
                <img src="./src/images/pt-flag.svg" alt="Portuguese flag" className="flag-pt" />
                <img src="./src/images/es-flag.svg" alt="Spanish flag" className="flag-es" />
                <img src="./src/images/fr-flag.svg" alt="French flag" className="flag-fr" />
            </div>
        </div>
    )
}

export default HeaderLanguageDropDown