import "../../index.css"

function Pros() {
    return (
        <article className="pros_container">
            <div className="title">
                <img src="./src/images/thumbs-up.svg" alt="thumbs up icon" className="icon"/>
                <h4>With Travel Planner</h4>
            </div>
            <ul>
                <li>
                    <img src="./src/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Organize itineraries, client info, and supplier details in one platform.</p>
                </li>
                <li>
                    <img src="./src/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Create professional, client-ready proposals quickly.</p>
                </li>
                <li>
                    <img src="./src/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Ensure data accuracy and consistency across all documents.</p>
                </li>
                <li>
                    <img src="./src/images/pros-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Deliver faster responses and win more clients.</p>
                </li>
            </ul>
        </article>
    )
}

export default Pros