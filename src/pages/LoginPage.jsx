import Header from '../components/Header';
import Footer from '../components/Fotter';
import LoginForm from "../components/LoginForm";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    }
    return (
        <div className="login-page">
            <h1>Funguje</h1>
            <button onClick={handleLogout}>Odhlásit se</button>
        </div>
    );
}



