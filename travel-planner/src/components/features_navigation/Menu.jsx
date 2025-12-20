import "../../index.css"
import {Link} from "wouter";

function Menu({page}) {

    const isBudgetForm = page === "budgetform";
    const isDetails = page === "details";
    const isItinerary = page === "itinerary";
    const isFinalOffer = page === "finaloffer";

    return (
        <ul className={`menu ${isBudgetForm ? "menu_budgetform" : isDetails ? "menu_details" : isItinerary ? "menu_itinerary" : isFinalOffer ? "menu_finaloffer" : ""} `}>
            <Link to= "/budgetform">
                <li>
                    <img src="/images/budget-form-icon.svg" alt="budget form icon" />
                    <p>Budget Form</p>
                </li>
            </Link>
            <Link to="/details">
                <li>
                    <img src="/images/details-icon.svg" alt="" />
                    <p>Details</p>
                    
                </li>
            </Link>
            <Link to="/itinerary">
                <li>
                    <img src="/images/itinerary-icon.svg" alt="" />
                    <p>Itinerary</p>
                </li>
            </Link>
            <Link to="/finaloffer">
                <li>
                    <img src="/images/final-offer-icon.svg" alt="" />
                    <p>Final offer</p>
                </li>
            </Link>
        </ul>
    )
}

export default Menu