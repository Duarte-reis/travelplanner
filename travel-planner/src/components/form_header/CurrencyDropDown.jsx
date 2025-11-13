import "../../index.css"

function CurrencyDropDown() {
    return (
        <div className="content_box" id="form_header_currency_dropdown">
            <form action="/change-currency" method="get">
                <label value="currency" className="sr-only">Currency:</label>
                    <select name="currency" id="language" className="selector_dropdown">
                        <option value="eur">Eur€</option>
                        <option value="dolar">Dolar$</option>
                    </select>
            </form>
        </div>
    )
}

export default CurrencyDropDown