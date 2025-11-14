import "../index.css"

function Carousel() {
    return (
        <div class="carousel">
            <div id="slide1" class="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 1"
                />

                <div class="carousel-controls">
                    <a href="#slide4" class="carousel-btn">&#10094;</a>
                    <a href="#slide2" class="carousel-btn">&#10095;</a>
                </div>
            </div>

            <div id="slide2" class="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 2"
                />

                <div class="carousel-controls">
                    <a href="#slide1" class="carousel-btn">&#10094;</a>
                    <a href="#slide3" class="carousel-btn">&#10095;</a>
                </div>
            </div>

            <div id="slide3" class="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 3"
                />

                <div class="carousel-controls">
                    <a href="#slide2" class="carousel-btn">&#10094;</a>
                    <a href="#slide4" class="carousel-btn">&#10095;</a>
                </div>
            </div>

            <div id="slide4" class="carousel-item">
                <img
                src="./src/images/final-offer-cover.png"
                alt="Slide 4"
                />

                <div class="carousel-controls">
                    <a href="#slide3" class="carousel-btn">&#10094;</a>
                    <a href="#slide1" class="carousel-btn">&#10095;</a>
                </div>
            </div>
        </div>
    )
}

export default Carousel