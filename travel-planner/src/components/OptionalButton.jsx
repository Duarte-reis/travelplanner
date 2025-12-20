import "../index.css";

function OptionalButton({ 
    active, 
    onToggle 
}) {

    return (
        <button
            id="optional_button"
            type="button"
            aria-label="optional button"
            className={active ? "active" : ""}
            onClick={onToggle}
        >
            {active ? "Yes" : "No"}
        </button>
    );
}

export default OptionalButton;