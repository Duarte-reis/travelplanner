import "../../index.css"
import CtaBtns from "../../generalComponents/CtaBtns"
import ResourcesDetails from "./homepageComponents/ResourcesDetails"

function FeaturesSection() {
    return (
        <section id="features_section">
            <div className="title">
                <h2>Manage your entire travel business on one smart platform</h2>
                <p className="subtitle">Everything your agency needs, in one place.</p>
            </div>
            <CtaBtns />
            <ResourcesDetails />
        </section>
    )
}

export default FeaturesSection