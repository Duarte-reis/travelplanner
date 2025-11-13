import "../../index.css"

function LogoTravelSelector() {
    return (
        <div className="logo_travel_selector">
            <img src="./src/images/logo-original.png" alt="logo" id="header_logo" />

             <div className="selector_dropdown" id="travel_selector_dropdown" >
                <form action="/change-language" method="get">
                    <label value="language" className="sr-only">Language:</label>
                        <select name="language" id="language" className="w-32">
                            <option value="inbound">Inbound</option>
                            <option value="outbound">Outbound</option>
                        </select>
                </form>
            </div>
        </div>
    )
}

export default LogoTravelSelector