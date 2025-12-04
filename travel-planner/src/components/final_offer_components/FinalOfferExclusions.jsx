import "../../index.css"
import Bar from "../Bar"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferExclusions() {

    const { hotelInclusionsExtras } = useContext(CounterContext);

    const { servicesInclusions } = useContext(CounterContext);

    return (
        <section id="final_offer_exclusions_container">
            <div className="final_offer_exclusions_bar">
                <Bar 
                    barContent = {["The price doesn't include"]}
                />
            </div>
            <div className="final_offer_exclusions_content">
                {hotelInclusionsExtras.cityTax === "No" && (
                    <div className="final_offer_exclusions_city_tax">
                        <p>City Tax</p>
                    </div>
                )}
                {hotelInclusionsExtras.beverages.beveragesSelector === "No" && (
                    <div className="final_offer_exclusions_beverages">
                        <p>Beverages</p>
                    </div>
                )}

                {hotelInclusionsExtras.bellman.bellmanSelector === "No" && (
                    <div className="final_offer_exclusions_bellman">
                        <p>Bellman</p>
                    </div>
                )}

                {servicesInclusions.transportationInclusionsContainer?.transportationSelector === "No" && (
                    <div className="final_offer_exclusions_transportation">
                        <p>Transportation</p>
                    </div>    
                )}

                {servicesInclusions.guideInclusionsContainer?.guideSelector === "No" && (
                    <div className="final_offer_exclusions_tour_guide">
                        <p>Tour Guide</p>
                    </div>    
                )}

                {servicesInclusions.flightInclusionsContainer?.flightSelector === "No" && (
                    <div className="final_offer_exclusions_flights">
                        <p>Flights</p>
                    </div>    
                )}

                {servicesInclusions.trainInclusionsContainer?.trainSelector === "No" && (
                    <div className="final_offer_exclusions_train">
                        <p>Train</p>
                    </div>    
                )}

                {servicesInclusions.localGuidesInclusionsContainer?.localGuidesSelector === "No" && (
                    <div className="final_offer_exclusions_train">
                        <p>Local Guides</p>
                    </div>    
                )}

                <p>Entrance fees not mentioned in "The price includes"</p>

                {servicesInclusions.headsetsInclusionsContainer?.headsetsSelector === "No" && (
                    <div className="final_offer_exclusions_headsets">
                        <p>Headsets</p>
                    </div>    
                )}

                {servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesSelector === "No" && (
                    <div className="final_offer_exclusions_gratuities">
                        <p>Gratuities</p>
                    </div>    
                )}

                {servicesInclusions.freeInclusionsContainer?.freeSelector === "No" && (
                    <div className="final_offer_inclusions_free">
                        <p>Frees</p>
                    </div>    
                )}

                {servicesInclusions.childDiscountInsclusionsContainer?.childDiscountSelector === "No" && (
                    <div className="final_offer_inclusions_child_discount">
                        <p>Child discount</p>
                    </div>    
                )}

            </div>
        </section>
    )
}

export default FinalOfferExclusions