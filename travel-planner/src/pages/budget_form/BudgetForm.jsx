import FeaturesHeader from "../../components/features_header/FeaturesHeader"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import FormComplete from "../../components/form/FormComplete"

function BudgetForm() {
    return (
        <section className="budget_form_wrap">
            <div className="budget_form_content">
                <FeaturesHeader />
                <BudgetNavigation 
                    page="budgetform"
                    pageTitle="Budget Form"
                />
                <FormComplete />
            </div>
        </section>
    )
}

export default BudgetForm