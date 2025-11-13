import "../../index.css"
import CtaBtns from "./CtaBtns"

function ProblemCardScale() {
    return (
       <div className="problem_card" id="scale_problem_card">
            <div className="title">
                <img src="./src/images/scale.svg" alt="scale icon" className="icon"/>
                <h3>Take your business to the next level: More Clients, Less Stress</h3>
            </div>
            <ul className="bullet_points">
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Manage more clients without increasing workload.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Handle multiple destinations, trips, and bookings.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Leverage automation as you grow.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Expand business opportunities without operational bottlenecks.</p>
                </li>
                <li>
                    <img src="./src/images/arrow-right-circle-outline.svg" alt="arrow icon" />
                    <p>Maintain quality while scaling business.</p>
                </li>
            </ul>
            <CtaBtns />
        </div>
    )
}

export default ProblemCardScale