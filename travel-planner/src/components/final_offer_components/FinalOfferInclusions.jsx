import "../../index.css"
import Bar from "../Bar"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferInclusions() {

    const { hotelInclusions } = useContext(CounterContext)

    const { hotelInclusionsExtras } = useContext(CounterContext);

    const container = hotelInclusions?.cityInclusionsContainer || [];

    const { servicesInclusions } = useContext(CounterContext);

    return (
        <section id="final_offer_inclusions_container">
            <div className="final_offer_inclusions_bar">
                <Bar 
                    barContent = {["The price includes"]}
                />
            </div>
            <div className="final_offer_inclusions_content">
                <h4>Accommodation:</h4>
                {container.map((item, idx) => (
                    <div className="city_hotel_inclusions_container" key={idx}>
                        <p>{item.city}:</p>
                        <p>{item.hotel}</p>
                        <p>{item.hotelRateStars}</p>
                    </div>
                ))}

                {hotelInclusionsExtras.cityTax === "Yes" && (
                    <div className="final_offer_inclusions_city_tax">
                        <h4>City Tax:</h4>
                        <p>Included</p>
                    </div>
                )}

                <div className="final_offer_inclusions_meal_plan">
                    <h4>Meal Plan:</h4>
                    {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "RO" && (
                        <p>{hotelInclusionsExtras.mealPlan?.mealPlanSelector} ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                    )}
                    {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "BB" && (
                        <p>{hotelInclusionsExtras.mealPlan?.mealPlanSelector} ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                    )}
                    {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "HB" && (
                        <p>{hotelInclusionsExtras.mealPlan?.mealPlanSelector} ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                    )}
                    {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "FB" && (
                        <p>{hotelInclusionsExtras.mealPlan?.mealPlanSelector} ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                    )}
                </div>

                {hotelInclusionsExtras.beverages.beveragesSelector === "Yes" && (
                    <div className="final_offer_inclusions_beverages">
                        <h4>Beverages:</h4>
                        {hotelInclusionsExtras.beverages?.beveragesSelector === "Yes" && (
                            <p>{hotelInclusionsExtras.beverages?.beveragesText}</p>
                        )}
                    </div>
                )}

                {hotelInclusionsExtras.bellman.bellmanSelector === "Yes" && (
                    <div className="final_offer_inclusions_bellman">
                        <h4>Bellman:</h4>
                        {hotelInclusionsExtras.bellman?.bellmanSelector === "Yes" && (
                            <p>{hotelInclusionsExtras.bellman?.bellmanText}</p>
                        )}
                    </div>
                )}

                {hotelInclusionsExtras.supplement?.supplementSelector && (
                    <div className="final_offer_inclusions_supplement">
                        <h4>Supplement:</h4>
                        <p>{hotelInclusionsExtras.supplement?.supplementText}: {Number(hotelInclusionsExtras.supplement.multiplication.pricePerDay || 0) *
                        Number(hotelInclusionsExtras.supplement.multiplication.numOfDays || 0)}€ per person</p>
                    </div>
                )}

                {servicesInclusions.transportationInclusionsContainer?.transportationSelector === "Yes" && (
                    <div className="final_offer_inclusions_transportation">
                        <h4>Transportation:</h4>
                        <p>{servicesInclusions.transportationInclusionsContainer?.transportationText}</p>
                    </div>    
                )}

                {servicesInclusions.guideInclusionsContainer?.guideSelector === "Yes" && (
                    <div className="final_offer_inclusions_tour_guide">
                        <h4>Tour Guide:</h4>
                        <p>{servicesInclusions.guideInclusionsContainer?.guideText}</p>
                    </div>    
                )}

                {servicesInclusions.flightInclusionsContainer?.flightSelector === "Yes" && (
                    <div className="final_offer_inclusions_flights">
                        <h4>Flights:</h4>
                        <p>{servicesInclusions.flightInclusionsContainer?.flightText}</p>
                    </div>    
                )}

                {servicesInclusions.trainInclusionsContainer?.trainSelector === "Yes" && (
                    <div className="final_offer_inclusions_train">
                        <h4>Train:</h4>
                        <p>{servicesInclusions.trainInclusionsContainer?.trainText}</p>
                    </div>    
                )}

                {servicesInclusions.localGuidesInclusionsContainer?.localGuidesSelector === "Yes" && (
                    <div className="final_offer_inclusions_train">
                        <h4>Local Guides:</h4>
                        <p>{servicesInclusions.localGuidesInclusionsContainer?.localGuidesText}</p>
                    </div>    
                )}

                {servicesInclusions.activitiesInclusionsContainer?.activitiesSelector === "Yes" && (
                    <div className="final_offer_inclusions_activities">
                        <h4>Entrance fees in:</h4>
                        <p>{servicesInclusions.activitiesInclusionsContainer?.activitiesText}</p>
                    </div>    
                )}

                {servicesInclusions.headsetsInclusionsContainer?.headsetsSelector === "Yes" && (
                    <div className="final_offer_inclusions_headsets">
                        <h4>Headsets:</h4>
                        <p>{servicesInclusions.headsetsInclusionsContainer?.headsetsText}</p>
                    </div>    
                )}

                {servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesSelector === "Yes" && (
                    <div className="final_offer_inclusions_gratuities">
                        <h4>Gratuities:</h4>
                        <p>{servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesText}</p>
                    </div>    
                )}

                {servicesInclusions.freeInclusionsContainer?.freeSelector === "Yes" && (
                    <div className="final_offer_inclusions_free">
                        <h4>Free description:</h4>
                        <p>{servicesInclusions.freeInclusionsContainer?.freeText}</p>
                    </div>    
                )}

                {servicesInclusions.childDiscountInsclusionsContainer?.childDiscountSelector === "Yes" && (
                    <div className="final_offer_inclusions_child_discount">
                        <h4>Child discount:</h4>
                        <p>{servicesInclusions.childDiscountInsclusionsContainer?.childDiscountText}</p>
                    </div>    
                )}

                <div className="final_offer_inclusions_notes">
                    <h4>Notes:</h4>
                    <p>{servicesInclusions.notesInclusionsContainer?.notesText}</p>
                </div>    
            </div>
        </section>
    )
}

export default FinalOfferInclusions