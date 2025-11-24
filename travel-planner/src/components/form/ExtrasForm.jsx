import "../../index.css"
import Multiplication from "../Multiplication"
import Bar from "../Bar"

function ExtrasForm({formIndex, multiplicationHeadsets = [], multiplicationBellman = [],multiplicationGratuities = [], updateExtrasMultiplicationData, sendTotalToNet}) {

    const totalHeadsets = multiplicationHeadsets.reduce((acc, curr) => {
        const price = parseFloat(curr.pricePerDay) || 0;
        const days = parseFloat(curr.numOfDays) || 0;
        return acc + price * days;
    }, 0);

    const totalBellman = multiplicationBellman.reduce((acc, curr) => {
        const price = parseFloat(curr.pricePerDay) || 0;
        const days = parseFloat(curr.numOfDays) || 0;
        return acc + price * days;
    }, 0);

    const totalGratuities = multiplicationGratuities.reduce((acc, curr) => {
        const price = parseFloat(curr.pricePerDay) || 0;
        const days = parseFloat(curr.numOfDays) || 0;
        return acc + price * days;
    }, 0);

    const totalExtras = totalHeadsets + totalBellman + totalGratuities;

    if (sendTotalToNet) {
        sendTotalToNet(totalExtras);
    }

    return (
        <section id="extras_form">
            <div className="headsets_container">
                <Bar barContent={["Headsets"]} />
                {multiplicationHeadsets.map((data, index) => (
                    <Multiplication
                        key={index}
                        data={data}
                        updateMultiplicationData={(key, value) =>
                            updateExtrasMultiplicationData(formIndex, "multiplicationHeadsets",key, index, value)}
                    />
                ))}
            </div>

            <div className="bellman_container">
                <Bar barContent={["Bellman"]} />
                {multiplicationBellman.map((data, index) => (
                    <Multiplication
                        key={index}
                        data={data}
                        updateMultiplicationData={(key, value) =>
                            updateExtrasMultiplicationData(formIndex, "multiplicationBellman", key, index, value)}
                    />
                ))}
            </div>

            <div className="gratuities_container">
                <Bar barContent={["Gratuities"]} />
                {multiplicationGratuities.map((data, index) => (
                    <Multiplication
                        key={index}
                        data={data}
                        updateMultiplicationData={(key, value) =>
                            updateExtrasMultiplicationData( formIndex, "multiplicationGratuities",key, index, value)}
                    />
                ))}
            </div>
        </section>
    );
}

export default ExtrasForm;