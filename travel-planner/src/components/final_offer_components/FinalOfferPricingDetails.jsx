import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"

function FinalOfferPricingDetails() {
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
                        <TextBox />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["20 + 1"]}
                        />
                        <TextBox />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["25 + 1"]}
                        />
                        <TextBox />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["30 + 1"]}
                        />
                        <TextBox />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["35 + 1"]}
                        />
                        <TextBox />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["40 + 1"]}
                        />
                        <TextBox />
                    </div>
                    <div className="price_per_pax">
                        <Bar 
                            barContent = {["45 + 1"]}
                        />
                        <TextBox />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default FinalOfferPricingDetails