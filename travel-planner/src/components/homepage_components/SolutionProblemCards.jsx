import "../../index.css"
import SolutionCardSimplify from "./SolutionCardSimplify"
import SolutionCardAutomate from "./SolutionCardAutomate"
import SolutionCardDeliver from "./SolutionCardDeliver"
import SolutionCardScale from "./SolutionCardScale"
import ProblemCardSimplify from "./ProblemCardSimplify"
import ProblemCardAutomate from "./ProblemCardAutomate"
import ProblemCardDeliver from "./ProblemCardDeliver"
import ProblemCardScale from "./ProblemCardScale"

function SolutionProblemCards() {
    return (
        <div className="solution_problem_cards_container">
            <div className="solution_cards_container">
                <SolutionCardSimplify />
                <SolutionCardAutomate/>
                <SolutionCardDeliver/>
                <SolutionCardScale/>
            </div>

            <div className="problem_cards_container">
                <ProblemCardSimplify />
                <ProblemCardAutomate />
                <ProblemCardDeliver />
                <ProblemCardScale />
            </div>
        </div>
    )
}

export default SolutionProblemCards