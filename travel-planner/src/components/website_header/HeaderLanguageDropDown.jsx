import "../../index.css"
import Selector from "../Selector"

function HeaderLanguageDropDown() {

    const selectLanguage = [
        {value:"English", label:"English"},
        {value:"Portuguese", label:"Poruguese"},
        {value:"Spanish", label:"Spanish"},
    ]

    return (
        <div className="selector_dropdown" id="header_language_dropdown">
            <img src="/images/web-icon.svg" alt="languages icon" />
            <Selector 
                options={selectLanguage}
                className="homepage_language_selector"
            />
                 
            <div className="flags">
                <img src="/images/uk-flag.svg" alt="English flag" className="flag-en" />
            </div>
        </div>
    )
}

export default HeaderLanguageDropDown