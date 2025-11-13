import "../../index.css"
import CtaBtns from "./CtaBtns"

function ProblemCardAutomate() {
    return (
       <div className="problem_card" id="automate_problem_card">
            <div className="title">
                <img src="./src/images/automate.svg" alt="automate icon" className="icon"/>
                <h3>Let the system do the heavy lifting: Faster, Accurate, Effortless</h3>
            </div>
            <ul className="bullet_points">
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Generate instant quotes and budgets automatically.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Transform repetitive tasks into hands-free processes.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Create professional proposals in minutes, not hours.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Free up your team to focus on client experience and growth.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Reduce human error and ensure data consistency.</p>
                </li>
            </ul>
            <CtaBtns />
        </div>
    )
}

export default ProblemCardAutomate