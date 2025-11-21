import "../index.css"

function Carousel() {
    return (
        <div className="carousel">
            <div id="slide1" className="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 1"
                />

                <div className="carousel-controls">
                    <a href="#slide4" className="carousel-btn">&#10094;</a>
                    <a href="#slide2" className="carousel-btn">&#10095;</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 2"
                />

                <div className="carousel-controls">
                    <a href="#slide1" className="carousel-btn">&#10094;</a>
                    <a href="#slide3" className="carousel-btn">&#10095;</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 3"
                />

                <div className="carousel-controls">
                    <a href="#slide2" className="carousel-btn">&#10094;</a>
                    <a href="#slide4" className="carousel-btn">&#10095;</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 4"
                />

                <div className="carousel-controls">
                    <a href="#slide3" className="carousel-btn">&#10094;</a>
                    <a href="#slide1" className="carousel-btn">&#10095;</a>
                </div>
            </div>
        </div>
    )
}

export default Carousel