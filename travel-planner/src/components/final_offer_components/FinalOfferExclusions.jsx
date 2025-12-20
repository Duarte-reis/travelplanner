import "../../index.css"
import Bar from "../Bar"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferExclusions() {

    const { hotelInclusionsExtras, servicesInclusions } = useContext(CounterContext);

    return (
        <section id="final_offer_exclusions_container">
            <div className="final_offer_exclusions_bar">
                <Bar 
                    barContent = {["The price doesn't include"]}
                />
            </div>
            <div className="final_offer_exclusions_content">
                {hotelInclusionsExtras.cityTax === "City Tax: No" && (
                    <div className="final_offer_exclusions_city_tax">
                        <p>City Tax</p>
                    </div>
                )}
                {hotelInclusionsExtras.beverages.beveragesSelector === "Beverages: No" && (
                    <div className="final_offer_exclusions_beverages">
                        <p>Beverages</p>
                    </div>
                )}

                {hotelInclusionsExtras.bellman.bellmanSelector === "Bellman: No" && (
                    <div className="final_offer_exclusions_bellman">
                        <p>Bellman</p>
                    </div>
                )}

                {servicesInclusions.transportationInclusionsContainer?.transportationSelector === "Transportation: No" && (
                    <div className="final_offer_exclusions_transportation">
                        <p>Transportation</p>
                    </div>    
                )}

                {servicesInclusions.guideInclusionsContainer?.guideSelector === "Tour Guide: No" && (
                    <div className="final_offer_exclusions_tour_guide">
                        <p>Tour Guide</p>
                    </div>    
                )}

                {servicesInclusions.flightInclusionsContainer?.flightSelector === "Flights: No" && (
                    <div className="final_offer_exclusions_flights">
                        <p>Flights</p>
                    </div>    
                )}

                {servicesInclusions.trainInclusionsContainer?.trainSelector === "Train: No" && (
                    <div className="final_offer_exclusions_train">
                        <p>Train</p>
                    </div>    
                )}

                {servicesInclusions.localGuidesInclusionsContainer?.localGuidesSelector === "Local Guides: No" && (
                    <div className="final_offer_exclusions_train">
                        <p>Local Guides</p>
                    </div>    
                )}

                {servicesInclusions.headsetsInclusionsContainer?.headsetsSelector === "Headsets: No" && (
                    <div className="final_offer_exclusions_headsets">
                        <p>Headsets</p>
                    </div>    
                )}

                {servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesSelector === "Gratuities: No" && (
                    <div className="final_offer_exclusions_gratuities">
                        <p>Gratuities</p>
                    </div>    
                )}

                {servicesInclusions.freeInclusionsContainer?.freeSelector === "Free description: no" && (
                    <div className="final_offer_exclusions_free">
                        <p>Frees</p>
                    </div>    
                )}

                {servicesInclusions.childDiscountInsclusionsContainer?.childDiscountSelector === "Child discount description: No" && (
                    <div className="final_offer_exclusions_child_discount">
                        <p>Child discount</p>
                    </div>    
                )}

                <p>Entrance fees not mentioned in "The price includes"</p>


            </div>
        </section>
    )
}

export default FinalOfferExclusions