import "../../index.css"
import SelectPaxAndFree from "../SelectPaxAndFree"
import Selector from "../Selector"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function PriceTiersDetails() {

    const { numOfPaxData } = useContext(CounterContext);

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
                {Object.entries(numOfPaxData[0]).map(([tierName, values]) => (
                    <SelectPaxAndFree 
                        key={tierName}
                        tierName={tierName}
                        numOfPax={values.numOfPax} 
                        free={values.free} 
                    />
                ))}
            </div>
        </section>
    )
}

export default PriceTiersDetails