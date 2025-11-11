import "../index.css"
import CtaBtns from "./CtaBtns"
import HeaderLanguageDropDown from "./HeaderLanguageDropDown"
import Login from "./Login"

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
                        <div className="navbar_links">
                            <a href="">Home</a>
                            <a href="">About us</a>
                            <a href="">Features</a>
                            <a href="">Contact</a>
                        </div>
                        <CtaBtns />
                    </div>         
                </nav>
        </header>
    )
}

export default Header