import "../../index.css"
import SelectPaxAndFree from "../SelectPaxAndFree"
import Selector from "../Selector"

function PriceTiersDetails() {

    const selectRoomType = [
        {value:"Double Twin", label:"Double Twin"},
        {value:"Single room", label:"Single room"}
    ]

    return (
        <section id="price_tiers_details">
            <div className="price_per_room_type">
                <p>Price tiers in:</p>
                <Selector 
                    options={selectRoomType}
                    defaultValue=""
                    className="room_type_selector"
                />
            </div>
            
            <div className="pax_and_free_container">
                <SelectPaxAndFree />
                <SelectPaxAndFree />
                <SelectPaxAndFree />
                <SelectPaxAndFree />
                <SelectPaxAndFree />
                <SelectPaxAndFree />
                <SelectPaxAndFree />
            </div>
        </section>
    )
}

export default PriceTiersDetails