import "../../index.css"
import TextBox from "../TextBox"
import Multiplication from "../Multiplication"

function TourGuideExpensesForm() {
    return (
        <section id="tour_guide_expenses_form">
            <div className="land">
                <p>Land</p>
                <TextBox />
            </div>
            <div className="meals">
                <p>Meals</p>
                <Multiplication />
            </div>
            <div className="meals">
                <p>Hotel</p>
                <Multiplication />
            </div>
        </section>
    )
}

export default TourGuideExpensesForm