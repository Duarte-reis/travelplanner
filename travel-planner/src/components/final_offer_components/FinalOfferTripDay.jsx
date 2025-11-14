import "../../index.css"
import Textbox from "../TextBox"
import Carousel from "../Carousel"

function FinalOfferTripDay() {
    return (
        <section className="final_offer_page">
            <div className="image_container">
                
            </div>
            
            <div className="content_container">
                <div className="title_text_container">
                    <h4>Day - Title</h4>
                    <Textbox />
                </div>
                <div className="carousel">
                    <Carousel />
                </div>    
            </div>

        </section>
    )
}

export default FinalOfferTripDay