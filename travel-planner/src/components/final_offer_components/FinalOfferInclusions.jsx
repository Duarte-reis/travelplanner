import "../../index.css"
import Bar from "../Bar"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferInclusions({ tierName }) {

    const { 
        hotelInclusions, 
        hotelInclusionsExtras, 
        servicesInclusions, 
        includeOptions, 
    } = useContext(CounterContext)

    const container = hotelInclusions?.cityInclusionsContainer || [];

    return (
        <section id="final_offer_inclusions_container">
            <div className="final_offer_inclusions_bar">
                <Bar 
                    barContent={["The price includes"]}
                />
            </div>
            <div className="final_offer_inclusions_content">
                {includeOptions[tierName] ? ( // If accommodation is not included (false), do not render (null). If we select "Yes" (true), render
                    <div className="final_offer_inclusions_accommodation">
                        <p>Accommodation:</p>
                        {container.map((item, idx) => (
                            <div className="city_hotel_inclusions_container" key={idx}>
                                <p>- {item.city}:</p>
                                <p>{item.hotel}</p>
                                <p>{item.hotelRateStars}</p>
                            </div>
                        ))}
                    </div>
                ) : null}

                {hotelInclusionsExtras.cityTax === "City Tax: Yes" && (
                    <div className="final_offer_inclusions_city_tax">
                        <p>City Tax:</p>
                        <p>Included</p>
                    </div>
                )}

                <div className="final_offer_inclusions_meal_plan">
                    {hotelInclusionsExtras.mealPlan?.mealPlanSelector !== "" ? ( // If there's nothing selected on Selector, don't display anything.
                        <div>
                            {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "Meal Plan: RO" && (
                                <p><span>{hotelInclusionsExtras.mealPlan?.mealPlanSelector}</span> ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                            )}
                            {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "Meal Plan: BB" && (
                                <p><span>{hotelInclusionsExtras.mealPlan?.mealPlanSelector}</span> ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                            )}
                            {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "Meal Plan: HB" && (
                                <p><span>{hotelInclusionsExtras.mealPlan?.mealPlanSelector}</span> ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                            )}
                            {hotelInclusionsExtras.mealPlan?.mealPlanSelector === "Meal Plan: FB" && (
                                <p><span>{hotelInclusionsExtras.mealPlan?.mealPlanSelector}</span> ({hotelInclusionsExtras.mealPlan?.mealPlanText})</p>
                            )}
                        </div>
                    ) :null }
                </div>

                {hotelInclusionsExtras.beverages?.beveragesSelector === "Beverages: Yes" && (
                    <div className="final_offer_inclusions_beverages">
                        <p>Beverages:</p>
                        {hotelInclusionsExtras.beverages?.beveragesSelector === "Beverages: Yes" && (
                            <p>{hotelInclusionsExtras.beverages?.beveragesText}</p>
                        )}
                    </div>
                )}

                {hotelInclusionsExtras.bellman?.bellmanSelector === "Bellman: Yes" && (
                    <div className="final_offer_inclusions_bellman">
                        <p>Bellman:</p>
                        {hotelInclusionsExtras.bellman?.bellmanSelector === "Bellman: Yes" && (
                            <p>{hotelInclusionsExtras.bellman?.bellmanText}</p>
                        )}
                    </div>
                )}

                {servicesInclusions.transportationInclusionsContainer?.transportationSelector === "Transportation: Yes" && (
                    <div className="final_offer_inclusions_transportation">
                        <p>Transportation:</p>
                        <p>{servicesInclusions.transportationInclusionsContainer?.transportationText}</p>
                    </div>    
                )}

                {servicesInclusions.guideInclusionsContainer?.guideSelector === "Tour Guide: Yes" && (
                    <div className="final_offer_inclusions_tour_guide">
                        <p>Tour Guide:</p>
                        <p>{servicesInclusions.guideInclusionsContainer?.guideText}</p>
                    </div>    
                )}

                {servicesInclusions.flightInclusionsContainer?.flightSelector === "Flights: Yes" && (
                    <div className="final_offer_inclusions_flights">
                        <p>Flights:</p>
                        <p>{servicesInclusions.flightInclusionsContainer?.flightText}</p>
                    </div>    
                )}

                {servicesInclusions.trainInclusionsContainer?.trainSelector === "Train: Yes" && (
                    <div className="final_offer_inclusions_train">
                        <p>Train:</p>
                        <p>{servicesInclusions.trainInclusionsContainer?.trainText}</p>
                    </div>    
                )}

                {servicesInclusions.localGuidesInclusionsContainer?.localGuidesSelector === "Local Guides: Yes" && (
                    <div className="final_offer_inclusions_local_guides">
                        <p>Local Guides:</p>
                        <p>{servicesInclusions.localGuidesInclusionsContainer?.localGuidesText}</p>
                    </div>    
                )}

                {servicesInclusions.activitiesInclusionsContainer?.activitiesSelector === "Admissions: Yes" && (
                    <div className="final_offer_inclusions_activities">
                        <p>Admissions:</p>
                        <p>{servicesInclusions.activitiesInclusionsContainer?.activitiesText}</p>
                    </div>
                )}

                {servicesInclusions.headsetsInclusionsContainer?.headsetsSelector === "Headsets: Yes" && (
                    <div className="final_offer_inclusions_headsets">
                        <p>Headsets:</p>
                        <p>{servicesInclusions.headsetsInclusionsContainer?.headsetsText}</p>
                    </div>    
                )}

                {servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesSelector === "Gratuities: Yes" && (
                    <div className="final_offer_inclusions_gratuities">
                        <p>Gratuities:</p>
                        <p>{servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesText}</p>
                    </div>    
                )}

                {(servicesInclusions.freeInclusionsContainer?.freeSelector === "Free description in: double/twin" || 
                servicesInclusions.freeInclusionsContainer?.freeSelector === "Free description in: single") && (
                    <div className="final_offer_inclusions_free">
                        <p>Free description:</p>
                        <p>{servicesInclusions.freeInclusionsContainer?.freeText}</p>
                    </div>    
                )}

                {servicesInclusions.childDiscountInsclusionsContainer?.childDiscountSelector === "Child discount description: Yes" && (
                    <div className="final_offer_inclusions_child_discount">
                        <p>Child discount:</p>
                        <p>{servicesInclusions.childDiscountInsclusionsContainer?.childDiscountText}</p>
                    </div>    
                )}

                {servicesInclusions.notesInclusionsContainer?.notesText !== "" ? ( // If there's nothing written inside "Notes", don't display
                    <div className="final_offer_inclusions_notes">
                        <p><span>Notes:</span> {servicesInclusions.notesInclusionsContainer?.notesText}</p>
                    </div>
                ) : null}   
            </div>
        </section>
    )
}

export default FinalOfferInclusions
