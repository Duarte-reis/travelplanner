import "../../index.css"
import Textbox from "../TextBox"


function FinalOfferGeneralTerms() {
    return (
        <section className="final_offer_page">
            <div className="image_container">
                
            </div>
            
            <div className="general_terms_content_container">
                <h4>General terms</h4>
                <div className="terms_boxes">
                    <Textbox />
                    <Textbox />
                    <Textbox />
                </div>
            </div>    
        </section>
    )
}

export default FinalOfferGeneralTerms