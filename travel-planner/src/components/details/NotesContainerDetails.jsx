import "../../index.css"
import Selector from "../Selector"
import TextBox from "../TextBox"

function NotesContainerDetails() {
    return (
        <section id="notes_container_details">
            <div className="free_description_child_discount_line">
                <div className="free_description">
                    <p>Free description:</p>
                    <Selector />
                </div>
                
                <div className="child_discount">
                    <p>Describe child discount:</p>
                    <Selector />
                    <TextBox />
                </div>
            </div>

            <div className="notes_container">
                <p>Notes:</p>
                <TextBox />
            </div>
        </section>
    )
}

export default NotesContainerDetails