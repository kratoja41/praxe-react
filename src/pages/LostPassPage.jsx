import Header from '../components/Header';
import Footer from '../components/Fotter';
import {Link} from "react-router-dom";
import PostsList from "../components/PostsList";

export default function LostPassPage() {
    return (
        <>

            <div className="App">
             <PostsList></PostsList>
            </div>
            <Link to={"/"}>Domů</Link>
        </>
    );
}