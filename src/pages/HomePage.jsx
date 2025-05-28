import Header from '../components/Header';
import Footer from '../components/Fotter';
import LoginForm from "../components/LoginForm";


export default function homePage() {
    return (
        <>

            <div className="App">
                <Header/>
                <LoginForm/>
                <Footer/>
            </div>

        </>
    );
}
