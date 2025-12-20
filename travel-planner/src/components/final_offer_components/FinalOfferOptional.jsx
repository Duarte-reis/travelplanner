import "../../index.css"
import Bar from "../Bar"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferOptional() {
    
    const { 
        hotelInclusionsExtras,
        checkedActivities, 
        checkedLocalGuides, 
        numOfPaxData, 
        checkedFlightTrain, 
        checkedExtras, 
        checkedTransportation,
        checkedTourGuide, 
    } = useContext(CounterContext)

    const paxArray = Object.values(numOfPaxData[0]).map(tier => Number(tier.numOfPax) || 0)

    const freeArray = Object.values(numOfPaxData[0]).map(tier => Number(tier.free) || 0)

    return (
        <section id="final_offer_optional_container">
            <div className="final_offer_optional_bar">
                <Bar barContent={["Optional"]} />
            </div>

            <div className="final_offer_optional_content">

                {hotelInclusionsExtras.supplement?.supplementSelector && ( /* optional chaining to avoid crash if supplement or its properties are undefined */
                    <div className="final_offer_inclusions_supplement">
                        <p>Supplement:</p>
                        <p>{hotelInclusionsExtras.supplement?.supplementText}: {hotelInclusionsExtras.supplement?.supplementTotal}€ per person</p>
                    </div>
                )}

                {checkedActivities.map((activity, index) => (
                    <div key={index} className="final_offer_optional_activities">
                        <p>{activity.activityName + ":"}</p>
                        <p>{activity.price}€ per person</p>
                    </div>
                ))}

                {checkedLocalGuides.map((form, index) => (
                    <div key={index} className="final_offer_optional_local_guides">
                        <p><span>Local Guides: </span>{form.serviceName + ":"}</p>
                        <div>
                            {form.prices.map((price, tierIndex) => (
                                <p key={tierIndex}>
                                    {paxArray[tierIndex]}pax: {price}€
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                {checkedFlightTrain.map((item, index) => (
                    <div key={index} className="final_offer_optional_flighttrain">
                        <p>{item.selector + " - " + item.route + ":"}</p>
                        <p>{item.price}€ per person</p>
                    </div>
                ))}

                {checkedExtras.map((item, index) => (
                    <div key={index} className="final_offer_optional_extras">
                        {item.checkHeadsets && <p><span>Headsets:</span> {item.headsets}€ per person</p>}
                        {item.checkBellman && <p><span>Bellman:</span> {item.bellman}€ per person</p>}
                        {item.checkGratuities && <p><span>Gratuities:</span> {item.gratuities}€ per person</p>}
                    </div>
                ))}

                {checkedTransportation.map((form, index) => (
                    <div key={index} className="final_offer_optional_transportation">
                        <p>{form.typeOfVehicle + " (pax + free)"}:</p>
                        <div>
                            {(form.transportationPerTier || []).map((value, tierIndex) => (
                                <p key={tierIndex}>
                                    {paxArray[tierIndex]} + {freeArray[tierIndex]}: {Math.round(value)}€
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                {checkedTourGuide.map((form, index) => (
                    <div key={index} className="final_offer_optional_tour_guide">
                        <p>Tour Guide (pax + free):</p>
                        <div>
                            {(form.tourGuidePerTier || []).map((value, tierIndex) => (
                                <p key={tierIndex}>
                                    {paxArray[tierIndex]} + {freeArray[tierIndex]}: {Math.round(value)}€
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FinalOfferOptional

