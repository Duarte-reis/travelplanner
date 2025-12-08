import "../index.css";

function CheckButton({ active, onToggle }) {
    return (
        <button
            id="check_button"
            type="button"
            aria-label="check button"
            className={active ? "active" : ""}
            onClick={onToggle}
        >
            {active && "✕"}
        </button>
    );
}

export default CheckButton;
