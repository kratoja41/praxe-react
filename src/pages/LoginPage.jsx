import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import ToDoList from "../components/ToDoList";
import Footer from "../components/Fotter";
import {Button} from "antd";

export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    }
    return (
        <div className="login-page">
            <Header></Header>
            <ToDoList></ToDoList>
            <Button onClick={handleLogout}  type={"primary"} className={"btnToDoList"}   htmlType="submit">
                Odhlásit se
            </Button>
            <Footer></Footer>
        </div>
    );
}



