import "../../index.css"

function CtaBtns() {
    return(
        <div className="btns_cta_container">
            <button className="btn_cta" id="get_started">
                <p>Book a Demo</p>
                <img src="/images/arrow-right.svg" alt="arrow logo" />
            </button>
            <button className="btn_cta" id="contact_us">Contact us</button>
        </div>
    )
}

export default CtaBtns