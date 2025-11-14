import "../index.css"

function Selector() {
    return (
        <div className="selector_dropdown" id="travel_selector_dropdown" >
            <form action="" method="get">
                <label value="language" className="sr-only">Language:</label>
                    <select name="selector" id="selector">
                        <option value="">text</option>
                        <option value="">text</option>
                    </select>
            </form>
        </div>
    )
}

export default Selector