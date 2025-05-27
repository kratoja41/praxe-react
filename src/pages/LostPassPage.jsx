import Header from '../components/Header';
import Footer from '../components/Fotter';
import {Link} from "react-router-dom";
import LostPassword from "../components/LostPassword"
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