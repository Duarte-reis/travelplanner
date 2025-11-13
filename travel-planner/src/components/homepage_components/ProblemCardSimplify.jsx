import "../../index.css"
import CtaBtns from "./CtaBtns"

function ProblemCardSimplify() {
    return (
        <div className="problem_card" id="simplify_problem_card">
            <div className="title">
                <img src="./src/images/simplify.svg" alt="simplify icon" className="icon"/>
                <h3>Say goodbye to manual and endless docs</h3>
            </div>
            <ul className="bullet_points">
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                    <p>Centralize all travel information in one intuitive platform.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                    <p>Eliminate manual spreadsheets and disconnected tools.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                    <p>Make trip planning and budgeting faster and error-free.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                    <p>Organize itineraries, supplier contacts, and client data effortlessly.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                    <p>Enable your team to work smarter, not harder.</p>
                </li>
            </ul>
            <CtaBtns />
        </div>
    )
}

export default ProblemCardSimplify