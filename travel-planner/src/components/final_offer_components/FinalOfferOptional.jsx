import "../../index.css"
import Bar from "../Bar"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferOptional() {
    const { 
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

                {checkedActivities.map((activity, index) => (
                    <div key={index} className="final_offer_optional_activities">
                        <p>{activity.activityName + ":"}</p>
                        <p>{activity.price}€ per person</p>
                    </div>
                ))}

                {checkedLocalGuides.map((form, index) => (
                    <div key={index} className="final_offer_optional_local_guides">
                        <p>{form.serviceName + ":"}</p>
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
                        {item.checkHeadsets && <p>Headsets: {item.headsets}€</p>}
                        {item.checkBellman && <p>Bellman: {item.bellman}€</p>}
                        {item.checkGratuities && <p>Gratuities: {item.gratuities}€</p>}
                    </div>
                ))}


            {checkedTransportation.map((form, index) => (
                <div key={index}>
                    <p>{form.typeOfVehicle}:</p>
                    {(form.transportationPerTier || []).map((value, tierIndex) => (
                        <p key={tierIndex}>
                            {paxArray[tierIndex]} + {freeArray[tierIndex]}: {Math.round(value)}€
                        </p>
                    ))}
                </div>
            ))}

            {checkedTourGuide.map((form, index) => (
                <div key={index}>
                    <p>Tour Guide:</p>
                    {(form.tourGuidePerTier || []).map((value, tierIndex) => (
                        <p key={tierIndex}>
                            {paxArray[tierIndex]} + {freeArray[tierIndex]}: {Math.round(value)}€
                        </p>
                    ))}
                </div>
            ))}
            </div>
        </section>
    )
}

export default FinalOfferOptional

