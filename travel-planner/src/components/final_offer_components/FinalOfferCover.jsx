import "../../index.css"
import FinalOfferNavigationBtns from "../FinalOfferNavigationBtns"
import Textbox from "../TextBox"

function FinalOfferCover() {
    return (
        <section className="final_offer_page">
            <h3>TRIP TITLE</h3>
            <div className="client_info_container">
                <div className="group_info">
                    <p>Group</p>
                    <p>Group name</p>
                </div>
                <div className="dates_info">
                    <p>Dates</p>
                    <p>Month day - Month day</p>
                </div>
                <div className="client_name">
                    <p>Made for</p>
                    <p>Client name</p>
                </div>
            </div>
        </section>
    )
}

export default FinalOfferCover