import "../../index.css"
import Selector from "../Selector"

function LogoTravelSelector() {
    return (
        <div className="logo_travel_selector">
            <img src="./src/images/logo-original.png" alt="logo" id="header_logo" />
             <Selector />
        </div>
    )
}

export default LogoTravelSelector