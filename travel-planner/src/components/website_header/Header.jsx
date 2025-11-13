import "../../index.css"
import CtaBtns from "../homepage_components/CtaBtns"
import HeaderLanguageDropDown from "./HeaderLanguageDropDown"
import Login from "../homepage_components/Login"
import NavigationLinks from "./HeaderNavigationLinks"

function Header() {
    return (
        <header id="header">
            <img src="./src/images/logo-original.png" alt="logo" id="header_logo" />
                <nav className="header_navbar_container">
                    <div className="navbar_tools">
                        <Login />
                        <HeaderLanguageDropDown />
                    </div>
                    <div className="navbar_links_cta_container">   
                        <NavigationLinks />
                        <CtaBtns />
                    </div>         
                </nav>
        </header>
    )
}

export default Header