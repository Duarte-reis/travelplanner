import "../../index.css"
import {Link} from "wouter";

function Login() {
    return (
        <div className="login">
                <img src="/images/account-circle-outline-icon.svg" alt="login logo" />
            <Link to="/loginsignup">    
                <p>Log in / Sign up </p>
            </Link>
        </div>
    )
}

export default Login