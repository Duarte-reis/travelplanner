import "../../index.css"

function ActionBtns() {
    return (
        <div className="action_btns_container">
            <button className="action_btn" id="new">New</button>
            <button className="action_btn" id="duplicate">Duplicate</button>
            <button className="action_btn" id="delete">Delete</button>
        </div>
    )
}

export default ActionBtns