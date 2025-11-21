import "../../index.css"
import TextBox from "../TextBox"
import {Link} from "wouter"
import { useLocalStorage } from "../../hooks/useLocalStorage"

function LogInSignUpCta() {

    const [values, setValues] = useLocalStorage("textBoxValues", {}); 
    const updateValue = (id, value) => {
        setValues({...values, [id]: value})
    }

    return (
        <section id="log_in_sign_up_cta">
            <div className="title_container">
                <div className="log_in_title">
                    <p>Log In</p>    
                </div>
                <div className="sign_up_title">
                    <p>Sign Up</p>   
                </div>
            </div>
            <div className="e-mail_password_input">
                <TextBox 
                    value={values.email || ""}
                    onChange={(value) => updateValue("email", value)}
                    placeholder = "E-mail"
                />
                <TextBox 
                    value={values.password || ""}
                    onChange={(value) => updateValue("password", value)}
                    placeholder = "Password"
                />
                <Link to="budgetform">
                <button className="btn_log_in">
                    <p>Log in</p>
                </button>
            </Link>
            </div>
            
        </section>
    )
}

export default LogInSignUpCta