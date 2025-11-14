import "../../index.css"
import FinalOfferNavigationBtns from "../FinalOfferNavigationBtns"
import Textbox from "../TextBox"

function FinalOfferCover() {
    return (
        <section className="final_offer_page">
            <div className="image_container">
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
            </div>
            <div class="content_container">
                <div className="title_text_container">
                    <h4>About the destination</h4>
                    <Textbox />
                </div>
                <div className="nav_btns_container">
                    <FinalOfferNavigationBtns />
                    <FinalOfferNavigationBtns />
                    <FinalOfferNavigationBtns />
                </div>
            </div>
        </section>
    )
}

export default FinalOfferCover