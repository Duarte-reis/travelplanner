import "../../index.css"
import CtaBtns from "../homepage_components/CtaBtns"
import HeaderLanguageDropDown from "./HeaderLanguageDropDown"
import Login from "../homepage_components/Login"
import NavigationLinks from "./HeaderNavigationLinks"
import { Link } from "wouter"

function Header() {
    return (
        <header id="header">
            <div className="header_content">
                <Link to="/homepage">
                    <img src="/images/logo-original.png" alt="logo" id="header_logo" />
                </Link>
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
            </div>
        </header>
    )
}

export default Header