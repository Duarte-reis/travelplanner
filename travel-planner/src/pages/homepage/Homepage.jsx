import Header from "../../components/website_header/Header"
import HeroSection from "./HeroSection"
import PresentationSection from "./PresentationSection"
import SolutionSection from "./SolutionSection"
import FeaturesSection from "./FeaturesSection"
import ProsConsSection from "./ProsConsSection"
import Footer from "./Footer"

function Homepage() {

    return (
        <section id="homepage_wrap">
            <Header />
            <div className="homepage_content_wrap">
                <HeroSection />
                <PresentationSection />
                <SolutionSection />
                <FeaturesSection />
                <ProsConsSection />
            </div>    
            <div className="homepage_footer_wrap">
                <Footer />
            </div>    
        </section>
    )
}

export default Homepage