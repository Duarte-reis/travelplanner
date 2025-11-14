import "../../index.css"
import Selector from "../Selector"

function HeaderLanguageDropDown() {
    return (
        <div className="selector_dropdown" id="header_language_dropdown">
            <img src="./src/images/web-icon.svg" alt="languages icon" />
            <Selector />
                 
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