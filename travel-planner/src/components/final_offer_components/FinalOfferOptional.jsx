import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"

function FinalOfferOptional() {
    return (
        <section id="final_offer_optional_container">
            <div className="final_offer_optional_bar">
                <Bar 
                    barContent = {["Optional"]}
                />
            </div>
            <div className="final_offer_optional_content">
                <TextBox />
            </div>
        </section>
    )
}
export default FinalOfferOptional