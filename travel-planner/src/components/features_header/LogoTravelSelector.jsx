import "../../index.css"
import Selector from "../Selector"

function LogoTravelSelector() {

    const tripType = [
    {value: "Inbound", label: "Inbound"},
    {value: "Outbound", label: "Outbound"},
    ]
    
    return (
        <div className="logo_travel_selector">
            <img src="/images/logo-original.png" alt="logo" id="header_logo" />
             <Selector 
                options={tripType} 
                defaultValue="Inbound"
                className="trip_type_selector"
            />
        </div>
    )
}

export default LogoTravelSelector