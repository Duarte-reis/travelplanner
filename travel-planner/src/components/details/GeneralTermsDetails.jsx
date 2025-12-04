import "../../index.css"
import Selector from "../Selector"
import TextArea from "../TextArea"

function GeneralTermsDetails({generalTerms, setGeneralTerms}) {

    const totalCancelationAutoText = {
        Yes: "Total Cancelation:\n Up to 91 days before arrival: Free cancellation\n Between 90 days and 46 days before arrival:\n 20% penalty on the total booked\n Between 45 days and 16 days before arrival:\n 50% penalty on the total booked.\n At least 15 days before arrival:\n 100% penalty on the total booked.",
        No: ""
    }

    const partialCancelationText = {
        Yes: "Partial Cancelation:\n Up to 91 days before arrival: Free cancellation\n Between 90 days and 46 days before arrival:\n 20% penalty on the total booked\n Between 45 days and 16 days before arrival:\n 50% penalty on the total booked.\n At least 15 days before arrival:\n 100% penalty on the total booked.",
        No: ""
    }


    return (
        <section id="general_terms_details">
            <div className="cancelation_policy_container">
                <div className="cancelation_policy_selector">
                    <p>Cancelation policy:</p>
                    <Selector 
                        value={generalTerms.cancelationPolicyContainer?.cancelationSelector}
                        onChange={(value) =>
                            setGeneralTerms ({
                                ...generalTerms,
                                cancelationPolicyContainer: {
                                    cancelationSelector: value,
                                    totalCancelationText: totalCancelationAutoText[value],
                                    partialCancelationText: partialCancelationText[value]
                                } 
                            })
                        }
                    />
                </div>
                <div className="cancelation_text_container">
                    <TextArea
                        value={generalTerms.cancelationPolicyContainer?.totalCancelationText}
                        onChange={(value) => 
                            setGeneralTerms ({
                                ...generalTerms,
                                cancelationPolicyContainer: {
                                    ...generalTerms.cancelationPolicyContainer, totalCancelationText: value
                                }
                            })
                        }
                    />
                    <TextArea 
                        value={generalTerms.cancelationPolicyContainer?.partialCancelationText}
                        onChange={(value) => 
                            setGeneralTerms ({
                                ...generalTerms,
                                cancelationPolicyContainer: {
                                    ...generalTerms.cancelationPolicyContainer, partialCancelationText: value
                                }
                            })
                        }
                    />
                </div>
            </div>


            <div className="payment_terms_container">
                <div className="payment_terms_selector">
                    <p>Payment terms:</p>
                    <Selector 
                        value={generalTerms.paymentTermsPolicyContainer?.paymentSelector}
                        onChange={(value) =>
                            setGeneralTerms ({
                                ...generalTerms,
                                paymentTermsPolicyContainer: {
                                    paymentSelector: value,
                                    paymentText: value === "Yes" ? "20% deposit of the global value of the group up 90 days before arrival.\n50% deposit of the global value of the group up 45 days before arrival.\nTotal payment of the group up to 15 days before arrival." : ""
                                }
                            })
                        }
                    />
                </div>
                <TextArea 
                    value={generalTerms.paymentTermsPolicyContainer?.paymentText}
                    onChange={(value) =>
                        setGeneralTerms ({
                            ...generalTerms,
                            paymentTermsPolicyContainer: {
                                ...generalTerms.paymentTermsPolicyContainer, paymentText: value
                            }
                        })
                    }
                />
            </div>

            <div className="bank_details_container">
                <div className="bank_details_selector">
                    <p>Bank details:</p>
                    <Selector 
                        value={generalTerms.bankDetailsContainer?.bankSelector}
                        onChange={(value) =>
                            setGeneralTerms ({
                                ...generalTerms,
                                bankDetailsContainer: {
                                    bankSelector: value,
                                    bankText: value === "Yes" ? "Company name: Tour Operator\nIBAN: PT50 1234 5678 90123456789 01\nBIC/SWIFT: FICTPTPLXXX" : ""

                                }
                            })
                        }
                    />
                </div>
                <TextArea 
                    value={generalTerms.bankDetailsContainer?.bankText}
                    onChange={(value) =>
                        setGeneralTerms ({
                            ...generalTerms,
                            bankDetailsContainer: {
                                ...generalTerms.bankDetailsContainer, bankText: value
                            }
                        })
                    }
                />
            </div>
        </section>
    )
}

export default GeneralTermsDetails