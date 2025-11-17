import "../../index.css"
import {Link} from "wouter";

function Menu({page}) {

    const isBudgetForm = page === "budgetform";
    const isDetails = page === "details";
    const isItinerary = page === "itinerary";
    const isFinalOffer = page === "finaloffer";

    return (
        <ul className={`menu ${isBudgetForm ? "menu_budgetform" : isDetails ? "menu_details" : isItinerary ? "menu_itinerary" : isFinalOffer ? "menu_finaloffer" : ""} `}>
            <li>
                <Link to= "/budgetform">
                <img src="./src/images/budget-form-icon.svg" alt="budget form icon" />
                <p>Budget Form</p>
                </Link>
            </li>
            <li>
                <Link to="/details">
                <img src="./src/images/details-icon.svg" alt="" />
                <p>Details</p>
                </Link>
            </li>
            <li>
                <Link to="/itinerary">
                <img src="./src/images/itinerary-icon.svg" alt="" />
                <p>Itinerary</p>
                </Link>
            </li>
            <li>
                <Link to="/finaloffer">
                <img src="./src/images/final-offer-icon.svg" alt="" />
                <p>Final offer</p>
                </Link>
            </li>
        </ul>
    )
}

export default Menu