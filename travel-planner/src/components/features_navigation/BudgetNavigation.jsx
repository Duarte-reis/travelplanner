import "../../index.css"
import Menu from "./Menu"
import NavigationBtns from "../features_navigation/NavigationBtns"
import ActionBtns from "./ActionBtns"
import FormHeader from "../form_header/FormHeader"


function BudgetNavigation() {
    return (
        <section id="budget_navigation">
            <div className="menu_wrapper">
                <Menu />
            </div>
            
            <div className="navigation_form_wrapper">
                <div className="navigation_wrapper">
                    <NavigationBtns />
                    <ActionBtns />
                 </div>
                <FormHeader />
            </div>      
        </section>

    )
}

export default BudgetNavigation