import "../../index.css"
import TextBox from "../TextBox"
import OptionalButton from "../OptionalButton"
import PaxTiers from "./PaxTiers"
import Multiplication from "../Multiplication"
import FreeButton from "../FreeButton"

function PriceTiersFormSmallScreen() {
    return (
        <section id="price_tiers_form_small_screen">
            <div className="pax_free_container">
                <div className="bar" id="num_of_pax">
                    <p>Pax + free</p>
                </div>
                <div className="pax_tiers">
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                    <PaxTiers />
                </div>
            </div>

            <div className="type_of_free_container">
                <div className="bar" id="type_of_free">
                    <p>Free type</p>
                </div>
                <div className="free_button_container">
                    <FreeButton />
                    <FreeButton />
                    <FreeButton />
                    <FreeButton />
                    <FreeButton />
                    <FreeButton />
                    <FreeButton />
                </div>
            </div>

            <div className="total_net_container">
                <div className="bar" id="total_net">
                    <p>Total Net</p>
                </div>
                <div className="total_net_text">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>
            </div>

            <div className="profit_margin_container">
                <div className="bar" id="profit_margin">
                    <p>Profit margin</p>
                </div>
                <div className="margin_comission">
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                </div>
            </div>

            <div className="client_comission_contaier">
                <div className="bar" id="client_comission">
                    <p>Client comission</p>
                </div>
                <div className="margin_comission">
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                    <Multiplication />
                </div>
            </div>

            <div className="price_per_pax_contaier">
                <div className="bar" id="price_per_pax">
                    <p>Price per pax</p>
                </div>
                <div className="price_per_pax">
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                </div>
            </div>
        </section>
    )
}

export default PriceTiersFormSmallScreen