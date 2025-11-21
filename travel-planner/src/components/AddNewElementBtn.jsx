import "../index.css"

function AddNewElementBtn({onAdd, text}) {
    return (
        <button onClick={onAdd} className="add_new_element">
            {text}
            <img src="./src/images/add-new-element.svg" />
        </button>
    )
}

export default AddNewElementBtn