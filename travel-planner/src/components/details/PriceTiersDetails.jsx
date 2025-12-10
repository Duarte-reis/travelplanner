import "../../index.css"
import SelectPaxAndFree from "../SelectPaxAndFree"
import Selector from "../Selector"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function PriceTiersDetails() {

    const { numOfPaxData, selectRoomType, setSelectRoomType, roomTypeOptions } = useContext(CounterContext);
    
    return (
        <section id="price_tiers_details">
            <div className="price_per_room_type">
                <p>Price tiers in:</p>

                <Selector
                    options={roomTypeOptions}
                    value={selectRoomType}
                    className="room_type_selector"
                    onChange={(value) => setSelectRoomType(value)}
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