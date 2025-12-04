import "../../index.css"
import PriceTiersDetails from "./PriceTiersDetails"
import Bar from "../Bar"
import HotelInclusions from "./HotelInclusions"
import ServicesInclusions from "./ServicesInclusions"
import GeneralTermsDetails from "./GeneralTermsDetails"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function DetailsComplete() {

    const [hotelInclusions, setHotelInclusions] = useLocalStorage("hotelinclusions", {
        cityTaxContainer: {cityTaxSelector: ""},
        mealPlanContainer: {mealPlanSelector: "", mealPlanText: ""},
        beveragesContainer: {beveragesSelector:""},
        bellmanContainer: {bellmanSelector:"", bellmanText:""},
        supplementContainer: {supplementSelector:"", pricePerDay:"", numOfDays:"", supplementText:""}
    })

    const { generalTerms, setGeneralTerms } = useContext(CounterContext)

    return (
        <section id="details_complete">
            <Bar 
                barContent = {["Price and Inclusions"]}
            />
            <div className="price_tiers_hotel_inclusions_container">
                <div className="price_tiers_details_complete">
                    <PriceTiersDetails />
                </div>

                <div className="hotel_inclusions_complete">
                    <HotelInclusions
                        hotelInclusions={hotelInclusions}
                        setHotelInclusions={setHotelInclusions}
                    />
                </div>
            </div>
            
            <div className="service_inclusions_complete">
                <ServicesInclusions />
            </div>

            <Bar 
                barContent = {["General Terms"]}
            />

            <div className="general_terms_details_complete">
                <GeneralTermsDetails 
                    generalTerms={generalTerms}
                    setGeneralTerms={setGeneralTerms}
                />
            </div>
        </section>
    )
}

export default DetailsComplete