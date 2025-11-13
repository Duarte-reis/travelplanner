import "../../index.css"
import CtaBtns from "./CtaBtns"

function ProblemCardDeliver() {
    return (
       <div className="problem_card" id="deliver_problem_card">
            <div className="title">
                <img src="./src/images/deliver.svg" alt="deliver icon" className="icon"/>
                <h3>Stop struggling - Deliver excellence instantly</h3>
            </div>
            <ul className="bullet_points">
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Produce polished, ready-to-present proposals.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Ensure consistent branding and professional design.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Showcase detailed itineraries.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Improve client satisfaction with clear and compelling communication.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Close deals faster with high-quality.</p>
                </li>
            </ul>
            <CtaBtns />
        </div>
    )
}

export default ProblemCardDeliver