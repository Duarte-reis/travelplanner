import "../../index.css"
import CtaBtns from "../../generalComponents/CtaBtns"

function HeroSection() {
    return (
        <section id="hero_section">
            <div className="cta_container">
                <div className="title">
                    <h1>Work smarter not harder</h1>
                    <p className="subtitle">Automate your budgeting process. Save time, reduce erros, impress your clients.</p>
                </div>
                <CtaBtns />
            </div>
            <img src="./src/images/screens.png" alt="laptop and tablet screen" />  
        </section>
    )
}

export default HeroSection