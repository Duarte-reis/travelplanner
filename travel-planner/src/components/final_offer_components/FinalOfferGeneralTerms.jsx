import "../../index.css"
import Bar from "../Bar"
import TextBox from "../TextBox"

function FinalOfferGeneralTerms() {
    return (
        <section id="final_offer_general_terms_container">
            <div className="final_offer_general_terms_bar">
                <Bar 
                    barContent = {["General terms"]}
                />
            </div>
            
            <div className="final_offer_general_terms_content">
                <div className="cancelation_terms_container">
                    <div className="total_cancelation"> 
                        <Bar 
                            barContent = {["Total cancelation"]}
                        />
                        <TextBox />
                    </div>
                    <div className="partial_cancelation"> 
                        <Bar 
                            barContent = {["Partial cancelation"]}
                        />
                        <TextBox />
                    </div>
                </div>

                <div className="final_offer_payment_terms_container">
                    <div className="payment_terms">
                        <Bar 
                            barContent = {["Payment terms"]}
                        />
                        <TextBox />
                    </div>

                    <div className="bank_details">
                        <Bar 
                            barContent = {["Bank details"]}
                        />
                        <TextBox />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalOfferGeneralTerms