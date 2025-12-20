import "../../index.css";
import Bar from "../Bar";
import TextBox from "../TextBox";
import { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function FinalOfferItinerary() {

    const { hotelFormData, globalItineraries } = useContext(CounterContext);

    const [images, setImages] = useLocalStorage("images", [
        null,
        null,
        null,
        null,
    ]);

    const defaultImg = "/images/final-offer-cover.png";

    const updateImages = (index, url) => {
        const updated = [...images];
        updated[index] = url;
        setImages(updated);
    };

    const [activeSearchIndex, setActiveSearchIndex] = useState(null);
    const [unsplashSearch, setUnsplashSearch] = useState("");
    const [unsplashResults, setUnsplashResults] = useState([]);

    const handleUnsplashSearch = () => {
        if (!unsplashSearch) return;
        fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(unsplashSearch)}&client_id=uaoBiXZyWkF3HB6wReVardjcEZe6qT8O-a1-0ZnLAq8`)
            .then((response) => response.json())
            .then((result) => setUnsplashResults(result.results || []));
    };

    const handleUnsplashSelect = (url, index) => {
        updateImages(index, url);
        setUnsplashResults([]);
        setUnsplashSearch("");
        setActiveSearchIndex(null);
    };

    const handleCloseSearch = () => {
        setUnsplashResults([]);
        setUnsplashSearch("");
        setActiveSearchIndex(null);
    };

    return (
        <div className="final_offer_itinerary_container">
            <Bar barContent={["Itinerary"]} />

            <div className="final_offer_itinerary_pictures">
                {images.map((img, index) => (
                    <div key={index} className="itinerary_img_wrapper">
                        <img src={img || defaultImg} alt={`itinerary ${index}`} />

                        <button
                            className="itinerary_img_search_btn"
                            onClick={() =>
                                setActiveSearchIndex(activeSearchIndex === index ? null : index)
                            }
                        >
                            <img src="/images/magnify.svg" alt="search button" />
                        </button>
                    </div>
                ))}
            </div>

            {activeSearchIndex !== null && (
                <>
                    <div className="itinerary_unsplash_modal_overlay" onClick={handleCloseSearch}></div>

                    <div className="unsplash_modal">
                        <div className="itinerary_search_container">
                            <div className="itinerary_search_field">
                                <input
                                    type="text"
                                    placeholder="Search image"
                                    value={unsplashSearch}
                                    onChange={(e) => setUnsplashSearch(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleUnsplashSearch()}
                                    className="itinerary_img_search_input"
                                />
                                <button className="itinerary_close_search_btn" onClick={handleCloseSearch}>
                                    <img src="/images/close.svg" alt="close search" />
                                </button>
                            </div>
                            
                            <div className="itinerary_unsplash_results">
                            {unsplashResults.map((image) => (
                                <img
                                    key={image.id}
                                    src={image.urls.thumb}
                                    className="itinerary_unsplash_thumb"
                                    onClick={() => 
                                        handleUnsplashSelect(
                                            image.urls.regular, 
                                            activeSearchIndex
                                        )
                                    }
                                />
                            ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="final_offer_itinerary_content">
                {hotelFormData.map((hotelForm, formIndex) => {
                    const storageKey = `itinerarydata-${formIndex}`;
                    const itineraryData = globalItineraries[storageKey] || [];

                    return (
                        <div key={formIndex} className="itinerary_container_display">
                            {hotelForm.dateContainer.map((dayObj, dayIdx) => {
                                const dayData = itineraryData[dayIdx] || {};
                                const dayNumber = hotelFormData
                                    .slice(0, formIndex)
                                    .reduce((sum, form) => sum + form.dateContainer.length, 0) + (dayIdx + 1)

                                return (
                                    <div key={dayIdx} className="final_offer_itinerary_content_container">
                                        <div className="final_offer_itinerary_title">
                                            <TextBox 
                                                value={`Day ${String(dayNumber).padStart(2, "0")}: ${dayObj.date}`} 
                                                readOnly 
                                            />
                                            <TextBox 
                                                value={dayData.itineraryTitle || ""} 
                                                readOnly 
                                            />
                                        </div>
                                        <div className="final_offer_itinerary_text_area">
                                            <p>{dayData.itineraryDescription || ""}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FinalOfferItinerary;
