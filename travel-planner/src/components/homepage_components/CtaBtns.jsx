import "../../index.css"

function CtaBtns() {
    return(
        <div className="btns_cta_container">
            <button className="btn_cta" id="get_started">
                <p>Get Started</p>
                <img src="./src/images/arrow-right.svg" alt="arrow logo" />
            </button>
            <button className="btn_cta" id="get_a_demo">Get a demo</button>
        </div>
    )
}

export default CtaBtns