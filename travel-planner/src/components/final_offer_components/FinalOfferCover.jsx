import "../../index.css"
import { useContext, useState } from "react"
import { CounterContext } from "../context/CounterContext"
import { useLocalStorage } from "../../hooks/useLocalStorage"

function FinalOfferCover() {

    const { formHeaderValues } = useContext(CounterContext)

    const [coverImage, setCoverImage] = useLocalStorage("coverimage", null) // Save selected cover image in localStorage

    const [unsplashSearch, setUnsplashSearch] = useState("") // Search box
    const [unsplashResults, setUnsplashResults] = useState([]) // Search results

    const defaultImg = "/images/final-offer-cover.png";

    const handleUnsplashSearch = () => { // Fetch images from Unsplash
        if (!unsplashSearch) return // If search input is empty, don't fetch
        fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(unsplashSearch)}&client_id=uaoBiXZyWkF3HB6wReVardjcEZe6qT8O-a1-0ZnLAq8`
        )
            .then((response) => response.json())
            .then((result) => setUnsplashResults(result.results || []))
    }

    const handleUnsplashSelect = (url) => { // Select image
        setCoverImage(url)
        setUnsplashResults([]); 
        setUnsplashSearch("");
    }

    const handleCloseSearch = () => { // Close search
        setUnsplashResults([])
        setUnsplashSearch("")
    }

    return (
        <section className="final_offer_cover_container">
            <div className="final_offer_cover_content">
                <div className="title_dates_container">
                    <h3>{formHeaderValues.bottomSection?.tripTitle || "Trip title"}</h3>
                    <div className="dates_container">
                        <div className="border_top"></div>
                        <div className="border_bottom"></div>
                        <div className="border_right"></div>
                        <div className="border_left"></div>
                        <div className="dates_text">
                            <p>
                                From: {formHeaderValues.topSection?.startDate || "Start Date"}/{formHeaderValues.topSection?.year || "Year"}
                            </p>
                            <p>
                                To: {formHeaderValues.topSection?.endDate || "End Date"}/{formHeaderValues.topSection?.year || "Year"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="client_info_container">
                    {/*<div className="group_info">
                        <p>Group</p>
                        <p>{formHeaderValues.middleSection?.groupName || "Group Name"}</p>
                    </div>
                    <div className="client_name">
                        <p>Made for</p>
                        <p>{formHeaderValues.middleSection?.clientName || "Client Name"}</p>
                    </div>*/}
                </div>
            </div>
            <div
                className="final_offer_cover"
                style={{
                    backgroundImage: `url(${coverImage || defaultImg})`
                }}
            >
                <div className="search_container">
                    <button className="img_search_btn" onClick={handleUnsplashSearch}>
                        <img src="/images/magnify.svg" alt="search button" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search image"
                        value={unsplashSearch}
                        onChange={(e) => setUnsplashSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleUnsplashSearch();
                            }
                        }}
                        className="img_search_input"
                    />
                    <button className="close_search_btn" onClick={handleCloseSearch}>
                        <img src="/images/close.svg" alt="close search" />
                    </button>
                </div>
                {unsplashResults.length > 0 && (
                    <div className="unsplash_results">
                        {unsplashResults.map((img) => (
                            <img
                                key={img.id}
                                src={img.urls.thumb}
                                alt={img.alt_description}
                                className="unsplash_thumb"
                                onClick={() => handleUnsplashSelect(img.urls.regular)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default FinalOfferCover
