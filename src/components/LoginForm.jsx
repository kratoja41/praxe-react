import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginButtons from "./LoginButtons";
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate(); // hook

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.trim()) {
            setError("Email není vyplněný.");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Email má neplatný tvar.");
            return;
        }

        if (!password.trim()) {
            setError("Heslo není vyplněné.");
            return;
        }

        setError("");
        // PŘESMĚROVÁNÍ
        localStorage.setItem('isLoggedIn', 'true'); //Overení Uzivatele
        navigate("/LoginPage");
    };

    return (
        <main className="login-container">
            {error && <div className="error-toast">{error}</div>}

            <img
                src="./image/mojeaamberkey.svg"
                alt="Moje Amber Logo"
                className="main-logo"
            />

            <form className="login-form" onSubmit={handleSubmit}>
                <EmailInput
                    email={email}
                    onChange={(e) => setEmail(e.target.value)}
                    setError={setError}
                />
                <PasswordInput
                    password={password}
                    onChange={(e) => setPassword(e.target.value)}
                    setError={setError}
                />
                <LoginButtons />
            </form>
        </main>
    );
}
