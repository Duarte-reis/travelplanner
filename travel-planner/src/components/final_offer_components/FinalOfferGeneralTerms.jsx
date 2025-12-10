import "../../index.css"
import Bar from "../Bar"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function FinalOfferGeneralTerms() {

    const { generalTerms } = useContext(CounterContext)

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
                        <div className="text_container"> 
                            {generalTerms.cancelationPolicyContainer?.totalCancelationText // This allows the text to be edited in CSS
                                ?.split("\n")
                                .map((line, i) => (
                                <p key={i}>{line}</p>
                                ))}                        
                        </div>
                    </div>
                    <div className="partial_cancelation"> 
                        <Bar 
                            barContent = {["Partial cancelation"]}
                        />
                        <div className="text_container"> 
                            {generalTerms.cancelationPolicyContainer?.partialCancelationText
                                ?.split("\n")
                                .map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="final_offer_payment_terms_container">
                    <div className="payment_terms">
                        <Bar 
                            barContent = {["Payment terms"]}
                        />
                        <div className="text_container">
                            {generalTerms.paymentTermsPolicyContainer?.paymentText
                                ?.split("\n")
                                .map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}                        </div>
                    </div>

                    <div className="bank_details">
                        <Bar 
                            barContent = {["Bank details"]}
                        />
                        <div className="text_container"> 
                            {generalTerms.bankDetailsContainer?.bankText
                                ?.split("\n")
                                .map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalOfferGeneralTerms