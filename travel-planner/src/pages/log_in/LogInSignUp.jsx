import "../../index.css"
import Header from "../../components/website_header/Header"
import LogInSignUpCta from "../../components/login_signup/LogInSignUpCta"

function LogInSignUp() {
    return (
        <section id="log_in">
            <div className="log_in_header">
                <Header />
            </div>
            <div className="log_in_cta">
                <LogInSignUpCta />
            </div>
        </section>
    )
}

export default LogInSignUp