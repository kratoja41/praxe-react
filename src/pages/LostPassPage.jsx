import Header from '../components/Header';
import Footer from '../components/Fotter';
import {Link} from "react-router-dom";
import LostPassword from "../components/LostPassword"
import HabaToDoList from "../components/HabaToDoList"
export default function LostPassPage() {
    return (
        <>

            <div className="App">
             <HabaToDoList></HabaToDoList>
            </div>
            <Link to={"/"}>Domů</Link>
        </>
    );
}