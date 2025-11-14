import "../../index.css"
import PriceTiersDetails from "./PriceTiersDetails"
import DetailsBar from "./DetailsBar"
import HotelInclusions from "./HotelInclusions"
import ServicesInclusions from "./ServicesInclusions"
import NotesContainerDetails from "./NotesContainerDetails"
import GeneralTermsDetails from "./GeneralTermsDetails"

function DetailsComplete() {
    return (
        <section id="details_complete">
            <DetailsBar />
            <div className="price_tiers_hotel_inclusions_container">
                <div className="price_tiers_details_complete">
                    <PriceTiersDetails />
                </div>

                <div className="hotel_inclusions_complete">
                    <HotelInclusions />
                </div>
            </div>
            
            <div className="service_inclusions_complete">
                <ServicesInclusions />
            </div>

            <div className="notes_container_details_complete">
                <NotesContainerDetails />
            </div>

            <DetailsBar />

            <div className="general_terms_details_complete">
                <GeneralTermsDetails />
            </div>

        </section>
    )
}

export default DetailsComplete