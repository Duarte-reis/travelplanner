import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"

function FinalOfferExclusions() {
    return (
        <section id="final_offer_exclusions_container">
            <div className="final_offer_exclusions_bar">
                <Bar 
                    barContent = {["The price doesn't include"]}
                />
            </div>
            <div className="final_offer_exclusions_content">
                <TextBox />
            </div>
        </section>
    )
}

export default FinalOfferExclusions