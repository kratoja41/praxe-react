import Header from '../components/Header';
import Footer from '../components/Fotter';
import LoginForm from "../components/LoginForm";
import EmailInput   from "../components/EmailInput";
import {Link} from "react-router-dom";
import LostPassword from "../components/LostPassword"
import LoginButtons from "../components/LoginButtons";
export default function LostPassPage() {
    return (
        <>

            <div className="App">
                <Header/>
              <LostPassword></LostPassword>
                <Footer/>
            </div>
            <Link to={"/"}>Domů</Link>
        </>
    );
}