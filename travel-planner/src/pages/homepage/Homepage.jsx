import Header from "../../components/website_header/Header"
import HeroSection from "./HeroSection"
import PresentationSection from "./PresentationSection"
import SolutionSection from "./SolutionSection"
import FeaturesSection from "./FeaturesSection"
import ProsConsSection from "./ProsConsSection"
import Footer from "./Footer"

function Homepage() {

    return (
        <>
            <Header />
            <HeroSection />
            <PresentationSection />
            <SolutionSection />
            <FeaturesSection />
            <ProsConsSection />
            <Footer />
        </>
    )
}

export default Homepage