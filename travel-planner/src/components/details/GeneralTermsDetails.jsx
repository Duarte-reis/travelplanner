import "../../index.css"
import Selector from "../Selector"
import TextBox from "../TextBox"

function GeneralTermsDetails() {
    return (
        <section id="general_terms_details">
            <div className="cancelation_policy_container">
                <div className="cancelation_policy_selector">
                    <p>Cancelation policy:</p>
                    <Selector />
                </div>
                <TextBox />
            </div>

            <div className="payment_bank_container">
                <div className="payment_terms_container">
                    <div className="payment_terms_selector">
                        <p>Payment terms:</p>
                        <Selector />
                    </div>
                    <TextBox />
                </div>

                <div className="bank_details_container">
                    <div className="bank_details_selector">
                        <p>Bank details:</p>
                        <Selector />
                    </div>
                    <TextBox />
                </div>
            </div>
        </section>
    )
}

export default GeneralTermsDetails