import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"

function FinalOfferInclusions() {
    return (
        <section id="final_offer_inclusions_container">
            <div className="final_offer_inclusions_bar">
                <Bar 
                    barContent = {["Price tiers in double/twin room (pax minimum + free)"]}
                />
            </div>
            <div className="final_offer_inclusions_content">
                <TextBox />
            </div>
        </section>
    )
}

export default FinalOfferInclusions