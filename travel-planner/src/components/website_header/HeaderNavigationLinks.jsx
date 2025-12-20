import "../../index.css"
import { Link } from "wouter"

function NavigationLinks() {
    return (
        <div className="navbar_links">
            <Link to="/homepage">
                <p>Home</p>
            </Link>
            <p>About us</p>
            <p>Features</p>
            <p>Contact</p>
        </div>
    )
}

export default NavigationLinks