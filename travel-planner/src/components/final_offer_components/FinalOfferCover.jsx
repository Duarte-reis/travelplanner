import "../../index.css"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useState } from "react";

function FinalOfferCover() {

    const { formHeaderValues } = useContext(CounterContext)

    const [coverImage, setCoverImage] = useLocalStorage("coverimage", null) // Saves the chosen img

    const [unsplashSearch, setUnsplashSearch] = useState("") // Saves the search text inserted in the search input
    const [unsplashResults, setUnsplashResults] = useState([]) // Saves the search results

    const handleUnsplashSearch = () => {
        if (!unsplashSearch) return // If the search field is empy, don't fetch
        fetch (`https://api.unsplash.com/photos?client_id=uaoBiXZyWkF3HB6wReVardjcEZe6qT8O-a1-0ZnLAq8`)
            .then((response) => response.json())
            .then((result) => setUnsplashResults(result.results || []))
    }

    const handleUnsplashSelect = (url) => { // Select image from Unsplash
        setBackgroundImage(url)
    }

    const handleCloseSearch = () => { // Close search
        setUnsplashResults([]) // Cleans results
        setUnsplashSearch("") // Cleans the input
    }

    return (
        <section className="final_offer_page">
            <button className="img_search_btn">
                <img src="./src/images/magnify.svg" alt="search button" />
                <input 
                    type="text"
                    placeholder="Search image"
                    value={unsplashSearch}
                    onChange={(e) => setUnsplashSearch(e.target.value)}
                />
            </button>
            <div className="final_offer_content_page">
                <h3>
                    {formHeaderValues.bottomSection?.tripTitle || "Trip title"}
                </h3>
                <div className="client_info_container">
                    <div className="group_info">
                        <p>Group</p>
                        <p>
                            {formHeaderValues.middleSection?.groupName || "Group Name"}
                        </p>
                    </div>

                    <div className="dates_info">
                        <p>Dates</p>
                        <div className="dates_data">
                            <p>
                                {formHeaderValues.topSection?.startDate || "Start Date"}
                            </p>
                            <p>
                                {formHeaderValues.topSection?.endDate || "End Date"}
                            </p>
                        </div>
                    </div>

                    <div className="client_name">
                        <p>Made for</p>
                        <p>
                            {formHeaderValues.middleSection?.clientName || "Client Name"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalOfferCover