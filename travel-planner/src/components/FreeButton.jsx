import "../index.css";
import OptionalButton from "./OptionalButton";

function FreeButton({
    activeIndex, 
    setActiveIndex
}) {

    return (
        <div id="free_button">
            <div className="sgl_free">
                <OptionalButton
                    active={activeIndex === 0}
                    onToggle={() => setActiveIndex(0)}
                />
                <p>sgl</p>
            </div>
            <div className="twin_free">
                <OptionalButton
                    active={activeIndex === 1}
                    onToggle={() => setActiveIndex(1)}
                />
                <p>twin</p>
            </div>
        </div>
    );
}

export default FreeButton;