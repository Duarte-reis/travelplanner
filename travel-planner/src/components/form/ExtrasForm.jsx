import "../../index.css";
import Multiplication from "../Multiplication";
import Bar from "../Bar";
import CheckButton from "../CheckButton";
import { useEffect } from "react";

function ExtrasForm({
    formIndex,
    multiplicationHeadsets = [],
    multiplicationBellman = [],
    multiplicationGratuities = [],
    checkHeadsets = false,
    checkBellman = false,
    checkGratuities = false,
    updateExtrasMultiplicationData,
    updateExtrasCheckData,
    sendTotalToNet
}) {

    const totalHeadsets = multiplicationHeadsets.reduce((sum, item) => {
        const price = parseFloat(item.pricePerDay) || 0;
        const days = parseFloat(item.numOfDays) || 0;
        return sum + price * days;
    }, 0);

    const totalBellman = multiplicationBellman.reduce((sum, item) => {
        const price = parseFloat(item.pricePerDay) || 0;
        const days = parseFloat(item.numOfDays) || 0;
        return sum + price * days;
    }, 0);

    const totalGratuities = multiplicationGratuities.reduce((sum, item) => {
        const price = parseFloat(item.pricePerDay) || 0;
        const days = parseFloat(item.numOfDays) || 0;
        return sum + price * days;
    }, 0);

    const totalExtras = 
        (checkHeadsets ? 0 : totalHeadsets) +
        (checkBellman ? 0 : totalBellman) +
        (checkGratuities ? 0 : totalGratuities);

    useEffect(() => {
        if (sendTotalToNet) {
            sendTotalToNet(totalExtras);
        }
    }, [totalExtras, sendTotalToNet]);

    return (
        <section id="extras_form">

            <div className="headsets_container">
                <Bar barContent={["Headsets"]} />
                <div className="headsets_content">
                    {multiplicationHeadsets.map((data, index) => (
                        <Multiplication
                            key={index}
                            data={data}
                            updateMultiplicationData={(key, value) =>
                                updateExtrasMultiplicationData(formIndex, "multiplicationHeadsets", key, index, value)
                            }
                        />
                    ))}
                    <CheckButton
                        active={checkHeadsets}
                        onToggle={() =>
                            updateExtrasCheckData(formIndex, "checkHeadsets", !checkHeadsets)
                        }
                    />
                </div>
            </div>

            <div className="bellman_container">
                <Bar barContent={["Bellman"]} />
                <div className="bellman_content">
                    {multiplicationBellman.map((data, index) => (
                        <Multiplication
                            key={index}
                            data={data}
                            updateMultiplicationData={(key, value) =>
                                updateExtrasMultiplicationData(formIndex, "multiplicationBellman", key, index, value)
                            }
                        />
                    ))}
                    <CheckButton
                        active={checkBellman}
                        onToggle={() =>
                            updateExtrasCheckData(formIndex, "checkBellman", !checkBellman)
                        }
                    />
                </div>
            </div>

            <div className="gratuities_container">
                <Bar barContent={["Gratuities"]} />
                <div className="gratuities_content">
                    {multiplicationGratuities.map((data, index) => (
                        <Multiplication
                            key={index}
                            data={data}
                            updateMultiplicationData={(key, value) =>
                                updateExtrasMultiplicationData(formIndex, "multiplicationGratuities", key, index, value)
                            }
                        />
                    ))}
                    <CheckButton
                        active={checkGratuities}
                        onToggle={() =>
                            updateExtrasCheckData(formIndex, "checkGratuities", !checkGratuities)
                        }
                    />
                </div>
            </div>

        </section>
    );
}

export default ExtrasForm;
