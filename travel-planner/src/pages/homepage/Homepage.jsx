import Header from "../../components/website_header/Header"
import CtaBtns from "../../components/homepage_components/CtaBtns"
import LearnMoreBtns from "../../components/homepage_components/LearnMoreBtns"

function Homepage() {

    return (
        <section id="homepage_wrap">
            <Header />
            <div className="homepage_content_wrap">

                <section id="hero_section">
                    <div className="cta_container">
                        <div className="title">
                            <h1>Work smarter not harder</h1>
                            <p className="subtitle">Automate your budgeting process. Save time, reduce erros, impress your clients.</p>
                        </div>
                        <CtaBtns />
                    </div>
                    <img src="/images/screens.png" alt="laptop and tablet screen" />  
                </section>

                <section id="presentation_section">
                    <div className="cta_container">
                        <div className="title">
                            <h2>Innovation that drives the travel industry and your business forward</h2>
                            <p className="subtitle">The all-in-one travel agency software for tailor-made trips. Design, quote, and manage complex FIT, Group, and MICE trips.</p>
                        </div>
                        <CtaBtns />
                    </div>
                    <img src="/images/screen-tablet.png" alt="laptop and tablet screen" />
                </section>

                <section id="solution_section">
                    <div className="cta_container">
                        <div className="title">
                            <h2>Simplify, Automate, Deliver, Scale : The way to grow</h2>
                            <p className="subtitle">Spend less time on spreadsheets and scattered tools. Travel Planner helps your agency operate efficiently and scale with confidence.</p>
                        </div>
                        <CtaBtns />
                    </div>
                    <div className="solution_problem_cards_container">
                        <div className="solution_cards_container">
                            <div className="solution_card" id="simplify_solution_card">
                                <img src="/images/simplify.svg" alt="simplify icon" className="icon"/>
                                <h4>Simplify</h4>
                                <p>Save time, reduce errors, impress clients.</p>
                            </div>
                            <div className="solution_card" id="automate">
                                <img src="/images/automate.svg" alt="automate icon" className="icon"/>
                                <h4>Automate</h4>
                                <p>Automate tasks, reduce errors, deliver results.</p>
                            </div>
                            <div className="solution_card" id="deliver">
                                <img src="/images/deliver.svg" alt="deliver icon" className="icon"/>
                                <h4>Deliver</h4>
                                <p>Deliver excellence in minutes.</p>
                            </div>
                            <div className="solution_card" id="scale">
                                <img src="/images/scale.svg" alt="scale icon" className="icon"/>
                                <h4>Scale</h4>
                                <p>Grow faster, stand out, stress less.</p>
                            </div>
                        </div>
                        <div className="problem_cards_container">
                            <div className="problem_card">
                                <div className="problem_card_title">
                                    <img src="/images/simplify.svg" alt="simplify icon" className="icon"/>
                                    <h3>Say goodbye to manual and endless docs</h3>
                                </div>
                                <ul className="bullet_points">
                                    <li>
                                        <img src="/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                                        <p>Centralize all travel information in one intuitive platform.</p>
                                    </li>
                                    <li>
                                        <img src="/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                                        <p>Eliminate manual spreadsheets and disconnected tools.</p>
                                    </li>
                                    <li>
                                        <img src="/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                                        <p>Make trip planning and budgeting faster and error-free.</p>
                                    </li>
                                    <li>
                                        <img src="/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                                        <p>Organize itineraries, supplier contacts, and client data effortlessly.</p>
                                    </li>
                                    <li>
                                        <img src="/images/arrow-right-circle-outline.svg" alt="arrow icon" className="list_icon"/>
                                        <p>Enable your team to work smarter, not harder.</p>
                                    </li>
                                </ul>
                                <CtaBtns />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="features_section">
                    <div className="features_section_title">
                        <h2>Manage your entire travel business on one smart platform</h2>
                        <p className="subtitle">Everything your agency needs, in one place.</p>
                    </div>
                    <CtaBtns />
                    <div className="resources_details_container">
                        <div className="resources_container">
                            <h3>Resources</h3>
                            <div className="features_title_container">
                                <div className="feature" id="budget_automation">
                                    <img src="/images/budget-logo.svg" alt="budget automation icon" className="icon"/>
                                    <h4>Budget automation</h4>
                                </div>
                                <div className="feature" id="data_management">
                                    <img src="/images/data-logo.svg" alt="data management icon" className="icon"/>
                                    <h4>Data management</h4>
                                </div>
                                <div className="feature" id="itinerary_builder">
                                    <img src="/images/itinerary-logo.svg" alt="itinerary builder icon" className="icon"/>
                                    <h4>Itinerary builder</h4>
                                </div>
                                <div className="feature" id="tailored_proposal">
                                    <img src="/images/proposal-logo.svg" alt="itinerary builder icon" className="icon"/>
                                    <h4>Tailored proposal</h4>
                                </div>
                            </div>
                            <LearnMoreBtns />
                        </div>
                        <div className="resources_details_board">
                            <div className="resources_details" id="budget_automation_details">
                                <div className="text_content">
                                    <div className="text_content_title">
                                        <img src="/images/budget-logo.svg" alt="budget automation icon" className="icon"/>
                                        <h4>Budget automation</h4>
                                    </div>
                                    <p>Create accurate quotes in seconds. Our smart automation tool calculates costs, margins, and supplier rates instantly. Eliminates manual errors and saves you hours of work. Focus on building experiences, not spreadsheets.</p>
                                    <LearnMoreBtns />   
                                </div>
                                <div className="image_content">
                                    <img src="/images/budget-automation-screens.png" alt="budget form screen image"/>
                                </div> 
                            </div>
                            <div className="resources_details" id="data_management_details">
                                <div className="image_content">
                                    <img src="/images/data-management-screens.png" alt="details screen image"/>
                                </div> 
                                <div className="text_content">
                                    <div className="text_content_title">
                                        <img src="/images/data-logo.svg" alt="budget automation icon" className="icon"/>
                                        <h4>Data management</h4>
                                    </div>
                                    <p>Keep all your client information, itineraries, and supplier details organized in one feature. Ensure accuracy, consistency, and professionalism in every proposal and communication. Deliver the right information to the right client, every time.</p>
                                    <LearnMoreBtns />   
                                </div>
                            </div>
                            <div className="resources_details" id="itinerary_builder_details">
                                <div className="text_content">
                                    <div className="text_content_title">
                                        <img src="/images/itinerary-logo.svg" alt="itinerary icon" className="icon"/>
                                        <h4>Itinerary builder</h4>
                                    </div>
                                    <p>Write and structure, each day, of your clients trips effortlessly. Create clear, professional itineraries that are easy to read and ready to share, keeping your travel plans organized and your clients informed.</p>
                                    <LearnMoreBtns />   
                                </div>
                                <div className="image_content">
                                    <img src="/images/itinerary-builder-screens.png" alt="itinerary builder screen image"/>
                                </div> 
                            </div>
                            <div className="resources_details" id="tailored_proposal_details">
                                <div className="image_content">
                                    <img src="/images/tailored-proposal-screens.png" alt="tailored proposal screen image"/>
                                </div> 
                                <div className="text_content">
                                    <div className="text_content_title">
                                        <img src="/images/data-logo.svg" id="budget automation icon" className="icon"/>
                                        <h4>Tailored proposal</h4>
                                    </div>
                                    <p>Deliver a truly professional experience to your clients with proposals that are complete, accurate, and personalized. All travel details, from budgets and itineraries to payment plans and pricing, are automatically transferred into a polished, ready-to-send document.</p>
                                    <LearnMoreBtns />   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="pros_cons_section">
                    <h2>Why Travel Planner is the ultimate solution for your Travel Agency?</h2>
                    <div className="pros_cons_board">
                        <div className="pros_cons_list">
                            <article className="cons_container">
                                <div className="cons_container_title">
                                    <img src="/images/thumbs-down.svg" alt="thumbs down icon" className="icon"/>
                                    <h4>Without Travel Planner</h4>
                                </div>
                                <ul>
                                    <li>
                                        <img src="/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Use scattered tools like Word or Excel, leading to confusion.</p>
                                    </li>
                                    <li>
                                        <img src="/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Manual calculations, higher risk of errors, time-consuming.</p>
                                    </li>
                                    <li>
                                        <img src="/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Information is fragmented, increasing miscommunication.</p>
                                    </li>
                                    <li>
                                        <img src="/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Proposals are created manually, often inconsistent and less polished.</p>
                                    </li>
                                </ul>
                            </article>
                            <article className="pros_container">
                                <div className="pros_container_title">
                                    <img src="/images/thumbs-up.svg" alt="thumbs up icon" className="icon"/>
                                    <h4>With Travel Planner</h4>
                                </div>
                                <ul>
                                    <li>
                                        <img src="/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Organize itineraries, client info, and supplier details in one platform.</p>
                                    </li>
                                    <li>
                                        <img src="/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Create professional, client-ready proposals quickly.</p>
                                    </li>
                                    <li>
                                        <img src="/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Ensure data accuracy and consistency across all documents.</p>
                                    </li>
                                    <li>
                                        <img src="/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                                        <p>Deliver faster responses and win more clients.</p>
                                    </li>
                                </ul>
                            </article>
                        </div>    
                        <CtaBtns />
                    </div>    
                </section> 
            </div>    

            <section id="homepage_footer_wrap">
                <footer id="footer">
                    <div className="content_container">
                        <div className="logo_social_icons">
                            <img src="/images/travel-planner-alt-logo.png" alt="logo" id="footer_logo"/>
                            <div className="social_icons">
                                <img src="/images/facebook-icon.svg" alt="facebook logo" />
                                <img src="/images/x-icon.svg" alt="x logo" />
                                <img src="/images/instagram-icon.svg" alt="instagram logo" />
                                <img src="/images/linkedin-icon.svg" alt="linkedin logo" />
                                <img src="/images/tiktok-icon.svg" alt="tiktok logo" />
                                <img src="/images/youtube-icon.svg" alt="youtube logo" />
                            </div>
                        </div>
                        <div className="footer_navigation">
                            <div className="navigation_list" id="features_list">
                                <h4>Features</h4>
                                <ul>
                                    <li>
                                        <p>Budget automation</p>
                                    </li>
                                    <li>
                                        <p>Data management</p>
                                    </li>
                                    <li>
                                        <p>Itinerary Builder</p>
                                    </li>
                                    <li>
                                        <p>Tailored Proposal</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="navigation_list" id="resources_list">
                                <h4>Resources</h4>
                                <ul>
                                    <li>
                                        <p>Get a demo</p>
                                    </li>
                                    <li>
                                        <p>Clients testiomonials</p>
                                    </li>
                                    <li>
                                        <p>Pricing</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="navigation_list" id="about_us_list">
                                <h4>About Us</h4>
                                <ul>
                                    <li>
                                        <p>Who we are</p>
                                    </li>
                                    <li>
                                        <p>Why Travel Planner?</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="navigation_list" id="help_center_list">
                                <h4>Help center</h4>
                                <ul>
                                    <li>
                                        <p>
                                            Contact us
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            FAQ's
                                        </p>
                                    </li>
                                </ul>
                            </div>
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
            </section>    
        </section>
    )
}

export default Homepage