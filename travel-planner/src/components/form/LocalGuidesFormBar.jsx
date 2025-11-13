import "../../index.css"

function LocalGuidesFormBar() {
    return (
        <div className="local_guides_form_bar">
            <div className="bar" id="local_guides_form_bar_title">
                <p>Local Guides</p>
            </div>
            <div className="bar" id="type_of_service_pricetiers_bar">
                <p>Type of service</p>
                <div className="price_tiers">
                    <p>15pax</p>
                    <p>20pax</p>
                    <p>25pax</p>
                    <p>30pax</p>
                    <p>40pax</p>
                    <p>45pax</p>
                    <p>Opt.</p>
                </div>

            </div>
        </div>
    )
}

export default LocalGuidesFormBar