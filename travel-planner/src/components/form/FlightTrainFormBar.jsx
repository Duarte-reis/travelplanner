import "../../index.css"

function FlightTrainFormBar() {
    return (
        <div className="flight_train_form_bar">
            <div className="bar" id="flight_train_form_bar_title">
                <p>Flight/Train</p>
            </div>
            <div className="bar" id="fligh_train_form_bar_elements">
                <p>Type</p>  
                <p>Company</p>  
                <p>Route</p>  
                <p>Fare</p>  
                <p>Tax</p>  
                <p>Guide</p>  
                <p>Opt.</p>  
            </div>
        </div>
    )
}

export default FlightTrainFormBar