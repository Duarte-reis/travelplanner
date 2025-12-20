import "../index.css";
import TextBox from "./TextBox";
import OptionalButton from "./OptionalButton";
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

function SelectPaxAndFree({ 
    numOfPax, 
    free, 
    tierName 
}) {

    const { includeOptions, setIncludeOptions } = useContext(CounterContext);

    // When we click, it change the value of include to the opposite of what it currently is.
    const toggleInclude = (tier) => {
        setIncludeOptions({
            ...includeOptions,
            [tier]: !includeOptions[tier]
        });
    };

    return (
        <section id="select_pax_and_free">
            <div className="pax_and_free">
                <TextBox 
                    value={numOfPax}
                    readOnly
                />
                <p>Pax</p>
                <p>+</p>
                <TextBox 
                    value={free}
                    readOnly
                />
                <p>Free</p>
            </div>

            <div className="include">
                <p>Display:</p>
                <OptionalButton 
                    active={includeOptions[tierName]}
                    onToggle={() => toggleInclude(tierName)}
                />
            </div>
        </section>
    );
}

export default SelectPaxAndFree;