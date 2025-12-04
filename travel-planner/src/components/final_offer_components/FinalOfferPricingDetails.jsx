import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
function FinalOfferPricingDetails() {

    const { finalRrpPerTier } = useContext(CounterContext);

    return (
        <section id="final_offer_pricing_details">
            <div className="final_offer_price_tiers">
                <Bar 
                    barContent = {["Price tiers in double/twin room (pax minimum + free)"]}
                />
                <div className="final_offer_price_per_pax_container">
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["15 + 1"]}
                        />
                        <TextBox 
                            value={Math.round(finalRrpPerTier[0]) + "€"}
                        />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["20 + 1"]}
                        />
                        <TextBox 
                            value={Math.round(finalRrpPerTier[1]) + "€"}
                        />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["25 + 1"]}
                        />
                        <TextBox 
                            value={Math.round(finalRrpPerTier[2]) + "€"}
                        />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["30 + 1"]}
                        />
                        <TextBox 
                            value={Math.round(finalRrpPerTier[3]) + "€"}
                        />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["35 + 1"]}
                        />
                        <TextBox 
                            value={Math.round(finalRrpPerTier[4]) + "€"}
                        />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["40 + 1"]}
                        />
                        <TextBox 
                            value={Math.round(finalRrpPerTier[5]) + "€"}
                        />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["45 + 1"]}
                        />
                        <TextBox 
                            value={Math.round(finalRrpPerTier[6]) + "€"}
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default FinalOfferPricingDetails