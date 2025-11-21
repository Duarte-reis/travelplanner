import "../../index.css"
import Multiplication from "../Multiplication"
import Bar from "../Bar"

function ExtrasForm() {
    return (
        <section id="extras_form">
            <div className="headsets_container">
                <Bar 
                    barContent = {["Headsets"]}
                />
                <Multiplication />
            </div>
            <div className="bellman_container">
                <Bar 
                    barContent = {["Bellman"]}
                />
                <Multiplication />
            </div>
            <div className="gratuities_container">
                <Bar 
                    barContent = {["Gratuities"]}
                />
                <Multiplication />
            </div>

        </section>
    )
}

export default ExtrasForm