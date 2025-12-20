import "../../index.css"
import BudgetNumber from "../form_header/BudgetNumber"

function NavigationBtns() {
    return (
        <div className="navigation_btns">
            <div className="btns">
                <button>
                    <img src="/images/arrow-left-black.svg" alt="" />
                </button>
                <button>
                    <img src="/images/arrow-right-black.svg" alt="" />
                </button>
            </div>

            <div className="budget_number_container">
                <BudgetNumber />
                <div className="total_number_of_budgets">
                    <p>1</p>
                    <p>(total)</p>
                </div>
            </div>    
        </div>
    )
}

export default NavigationBtns