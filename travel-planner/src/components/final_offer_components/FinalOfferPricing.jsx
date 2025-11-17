import "../../index.css"
import Textbox from "../TextBox"
import Bar from "../Bar"

function FinalOfferPricing() {
    return (
        <section className="final_offer_page">
            <div className="image_container">
                
            </div>
            
            <div className="pricing_content_container">
                <h4>Pricing & Deails</h4>
                <div className="pricing_tiers">
                    <Bar />
                    <Textbox />
                </div>
                <div className="inclusions">
                    <Bar />
                    <Textbox />
                </div>
                <div className="exclusions">
                    <Bar />
                    <Textbox />
                </div>
                <div className="optional">
                    <Bar />
                    <Textbox />
                </div>  
            </div>
        </section>
    )
}

export default FinalOfferPricing