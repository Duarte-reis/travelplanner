import "../../index.css"

function Cons() {
    return (
        <article className="cons_container">
            <div className="title">
                <img src="./src/images/thumbs-down.svg" alt="thumbs down icon" className="icon"/>
                <h4>Without Travel Planner</h4>
            </div>
            <ul>
                <li>
                    <img src="./src/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Use scattered tools like Word or Excel, leading to confusion.</p>
                </li>
                <li>
                    <img src="./src/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Manual calculations, higher risk of errors, time-consuming.</p>
                </li>
                <li>
                    <img src="./src/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Information is fragmented, increasing miscommunication.</p>
                </li>
                <li>
                    <img src="./src/images/cons-icon.svg" alt="error icon" className="list_icon"/>
                    <p>Proposals are created manually, often inconsistent and less polished.</p>
                </li>
            </ul>
        </article>
    )
}

export default Cons