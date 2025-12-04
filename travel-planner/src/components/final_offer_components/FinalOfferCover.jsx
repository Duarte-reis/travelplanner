import "../../index.css"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferCover() {

    const { formHeaderValues } = useContext(CounterContext)

    return (
        <section className="final_offer_page">
            <h3>
                {formHeaderValues.bottomSection?.tripTitle || "Trip title"}
            </h3>
            <div className="client_info_container">
                <div className="group_info">
                    <p>Group</p>
                    <p>
                        {formHeaderValues.middleSection?.groupName || "Group Name"}
                    </p>
                </div>
                <div className="dates_info">
                    <p>Dates</p>
                    <div className="dates_data">
                        <p>
                            {formHeaderValues.topSection?.startDate || "Start Date"}
                        </p>
                        <p>
                            {formHeaderValues.topSection?.endDate || "End Date"}
                        </p>
                    </div>
                </div>
                <div className="client_name">
                    <p>Made for</p>
                    <p>
                        {formHeaderValues.middleSection?.clientName || "Client Name"}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FinalOfferCover