import "../../index.css"
import CtaBtns from "../../generalComponents/CtaBtns"
import Pros from "./homepageComponents/Pros"
import Cons from "./homepageComponents/Cons"

function ProsConsSection() {
    return (
        <section id="pros_cons_section">
            <h2>Why Travel Planner is the ultimate solution for your Travel Agency?</h2>
            <div className="pros_cons_board">
                <div className="pros_cons_list">
                    <div className="cons">
                        <Cons />
                    </div>
                    <div className="pros">
                        <Pros />
                    </div>
                </div>    
                <CtaBtns />
            </div>    
        </section>    
    )
}

export default ProsConsSection