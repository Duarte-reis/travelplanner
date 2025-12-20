import "../../index.css"
import Header from "../../components/website_header/Header"
import TextBox from "../../components/TextBox"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { Link } from "wouter"
import CheckBtn from "../../components/login_signup/CheckBtn"

function LogInSignUp() {

    const [values, setValues] = useLocalStorage("textBoxValues", {}); 
        const updateValue = (id, value) => {
            setValues({...values, [id]: value})
        }

    return (
        <section id="log_in">
            <div className="log_in_header">
                <Header />
            </div>
                <div className="content_container">
                    <div className="log_in_container">
                        <div className="log_in_content">
                            <div className="title_container">
                                <div className="log_in_text_container">
                                    <p>Log in</p>
                                </div>   
                                <div className="sign_up_text_container">
                                    <p>Sign up</p>
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
                                <div className="password_copy">
                                    <div className="remember_btn_container">
                                        <p className="remember_me">Remember me</p>
                                        <CheckBtn />
                                    </div>
                                    <p className="forgot_your_password">Forgot password?</p>
                                </div>
                            </div>
                            <div className="login_btn_container">
                                <Link to="budgetform">
                                    <button className="btn_log_in">
                                        <p>Log in</p>
                                    </button>
                                </Link>
                            </div>
                            <div className="line">
                                <hr></hr>
                                <p>Or</p>
                                <hr></hr>
                            </div>
                            <div className="log_in_social">
                                <Link to="budgetform">
                                    <button className="btn_log_in_google">
                                        <img src="/images/google-logo.png" alt="google icon" />
                                        <p>Log in with Google</p>
                                    </button>
                                </Link>
                                <Link to="budgetform">
                                        <button className="btn_log_in_apple">
                                            <img src="/images/apple-white-logo.png" alt="apple icon" />
                                            <p>Log in with Apple</p>
                                        </button>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default LogInSignUp