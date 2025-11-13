import "../../index.css"
import FooterFeatures from "../../components/homepage_components/FooterFeatures"
import FooterResources from "../../components/homepage_components/FooterResources"
import FooterAboutUs from "../../components/homepage_components/FooterAboutUs"
import FooterHelpCenter from "../../components/homepage_components/FooterHelpCenter"


function footer() {
    return (
        <footer id="footer">
            <div className="content_container">
                <div className="logo_social_icons">
                    <img src="./src/images/travel-planner-alt-logo.png" alt="logo" id="footer_logo"/>
                    <div className="social_icons">
                        <img src="./src/images/facebook-icon.svg" alt="facebook logo" />
                        <img src="./src/images/x-icon.svg" alt="x logo" />
                        <img src="./src/images/instagram-icon.svg" alt="instagram logo" />
                        <img src="./src/images/linkedin-icon.svg" alt="linkedin logo" />
                        <img src="./src/images/tiktok-icon.svg" alt="tiktok logo" />
                        <img src="./src/images/youtube-icon.svg" alt="youtube logo" />
                    </div>
                </div>
                <div className="footer_navigation">
                    <FooterFeatures />
                    <FooterResources />
                    <FooterAboutUs />
                    <FooterHelpCenter />
                </div>
            </div>
            <div className="legal_section">
                <small>© 2025 Travel Planner. All rights reserved.</small>
                    <div className="legal_section_links">
                        <a href="">
                            <small>Conditions of use</small>
                        </a>
                        <a href="">
                            <small>Privacy Policy</small>
                        </a>
                        <a href="">
                            <small>Legal Terms</small>
                        </a>
                    </div>
            </div>
        </footer>
    )
}

export default footer