import "../index.css"

function AddNewElementBtn({
    onAdd, 
    text
}) {
    return (
        <button onClick={onAdd} id="add_new_element">
            {text}
            <img src="/images/add-new-element.svg" />
        </button>
    )
}

export default AddNewElementBtn