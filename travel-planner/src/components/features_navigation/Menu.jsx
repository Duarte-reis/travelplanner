import "../../index.css"

function Menu() {
    return (
        <ul className="menu">
            <li>
                <img src="./src/images/budget-form-icon-neutral.svg" alt="" />
                <a href="">Budget Form</a>
            </li>
            <li>
                <img src="./src/images/details-icon.svg" alt="" />
                <a href="">Details</a>
            </li>
            <li>
                <img src="./src/images/itinerary-icon.svg" alt="" />
                <a href="">Itinerary</a>
            </li>
            <li>
                <img src="./src/images/final-offer-icon.svg" alt="" />
                <a href="">Final offer</a>
            </li>
        </ul>
    )
}

export default Menu