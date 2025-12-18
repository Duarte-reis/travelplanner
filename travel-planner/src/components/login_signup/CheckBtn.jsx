import "../../index.css";
import { useState } from "react";

function CheckBtn() {
    const [isActive, setIsActive] = useState(false); // boolean inicial

    const handleClick = () => {
        setIsActive(!isActive); // alterna true / false
    };

    return (
        <div
            className={`check_btn ${isActive ? "active" : ""}`}
            onClick={handleClick}
        />
    );
}

export default CheckBtn;

