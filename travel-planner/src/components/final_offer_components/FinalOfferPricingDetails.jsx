import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
function FinalOfferPricingDetails() {

    const { finalRrpPerTier, numOfPaxData, includeOptions } = useContext(CounterContext);

    return (
        <section id="final_offer_pricing_details">
        <div className="final_offer_price_tiers">
            <Bar barContent={["Price per person in double/twin room (pax minimum + free)"]} />

            <div className="final_offer_price_per_pax_container">
                {Object.entries(numOfPaxData[0]).map(([tierName, values], index) => {
                    // Displays the price levels that are selected as “Yes”, in the PriceTiersDetails.jsx
                    if (!includeOptions[tierName]) return null; // If there are inactive tiers, they will not be displayed.

                    return (
                        <div className="price_per_pax" key={tierName}>
                            <Bar barContent={[`${values.numOfPax} + ${values.free}`]} />
                            <TextBox value={Math.round(finalRrpPerTier[index]) + "€"} />
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    )
}

export default FinalOfferPricingDetails