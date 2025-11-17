import "../../index.css"
import TourGuideForm from "./TourGuideForm"
import Bar from "../Bar"

function ExtrasForm() {
    return (
        <section id="extras_form">
                <Bar 
                    barContent = {["Headsets"]}
                />
                <TourGuideForm />
                <Bar 
                    barContent = {["Bellman"]}
                />
                <TourGuideForm />
                <Bar 
                    barContent = {["Gratuities"]}
                />
                <TourGuideForm />
        </section>
    )
}

export default ExtrasForm