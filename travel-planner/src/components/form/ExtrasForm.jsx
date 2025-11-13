import "../../index.css"
import TourGuideForm from "./TourGuideForm"
import BellmanFormBar from "./BellmanFormBar"
import HeadsetsFormBar from "./HeadsetsFormBar"
import GratuitiesFormBar from "./GratuitiesFormBar"

function ExtrasForm() {
    return (
        <section id="extras_form">
                <HeadsetsFormBar />
                <TourGuideForm />
                <BellmanFormBar />
                <TourGuideForm />
                <GratuitiesFormBar />
                <TourGuideForm />
        </section>
    )
}

export default ExtrasForm