import "../../index.css"
import CtaBtns from "../../generalComponents/CtaBtns"
import SolutionProblemCards from "./homepageComponents/SolutionProblemCards"

function SolutionSection() {
    return (
        <section id="solution_section">
            <div className="cta_container">
                <div className="title">
                    <h2>Simplify, Automate, Deliver, Scale : The way to grow</h2>
                    <p className="subtitle">Spend less time on spreadsheets and scattered tools. Travel Planner helps your agency operate efficiently and scale with confidence.</p>
                </div>
                <CtaBtns />
            </div>
            <SolutionProblemCards />
        </section>
    )
}

export default SolutionSection