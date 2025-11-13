import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import PaxTiers from "./PaxTiers"

function PriceTiersForm() {
    return (
        <section id="price_tiers_form">
            <div className="num_of_pax_line_container">
                <div className="bar" id="num_of_pax">
                    <p>Pax</p>
                </div>
                <div className="price_tier">
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                </div>
            </div>

            <div className="type_of_free_line_container">
                <div className="bar" id="type of free">
                    <p>Type of free</p>
                </div>
                <div className="free_button">
                    <OptionalButton />
                    <p>sgl</p>
                    <OptionalButton />
                    <p>twin</p>
                </div>
            </div>

            <div className="total_net_line_container">
                <div className="bar" id="total_net">
                    <p>Total NET</p>
                </div>
                <div className="total_net_text">
                    <TextBox />
                </div>
            </div>

            <div className="profit_margin_line_container">
                <div className="bar" id="profit_margin">
                    <p>Profit margin</p>
                </div>
                <div className="margin_comission">
                    <TextBox />
                    <p>x</p>
                    <TextBox />
                </div>
            </div>

            <div className="profit_margin_line_container">
                <div className="bar" id="client_comission">
                    <p>Client comission</p>
                </div>
                <div className="margin_comission">
                    <TextBox />
                    <p>x</p>
                    <TextBox />
                </div>
            </div>

            <div className="price_per_pax_line_container">
                <div className="bar" id="price_per_pax">
                    <p>Price per pax</p>
                </div>
                <div className="price_per_pax">
                    <TextBox />
                </div>
            </div>
        </section>
    )
}

export default PriceTiersForm