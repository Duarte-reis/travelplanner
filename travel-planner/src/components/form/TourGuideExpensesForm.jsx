import "../../index.css"
import TextBox from "../TextBox"

function TourGuideExpensesForm() {
    return (
        <section id="tour_guide_expenses_form">
            <div className="land">
                <p>Land</p>
                <TextBox />
            </div>
            <div className="meals">
                <p>Meals</p>
                <TextBox />
                <p>x</p>
                <TextBox />
            </div>
            <div className="meals">
                <p>Hotel</p>
                <TextBox />
                <p>x</p>
                <TextBox />
            </div>
        </section>
    )
}

export default TourGuideExpensesForm