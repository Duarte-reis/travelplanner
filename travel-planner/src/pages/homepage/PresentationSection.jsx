import "../../index.css"
import CtaBtns from "../../generalComponents/CtaBtns"

function PresentationSection() {
    return (
        <section id="presentation_section">
            <div className="cta_container">
                <div className="title">
                    <h2>Innovation that drives the travel industry and your business forward</h2>
                    <p className="subtitle">The all-in-one travel agency software for tailor-made trips. Design, quote, and manage complex FIT, Group, and MICE trips.</p>
                </div>
                <CtaBtns />
            </div>
            <img src="./src/images/screen-tablet.png" alt="laptop and tablet screen" />
        </section>
    )
}

export default PresentationSection