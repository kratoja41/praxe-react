
import './App.css';
import ProtectedRoute from "./components/ProtectedRoute";
import './styles/main.sass';
import 'antd/dist/reset.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import LostPassPage from "./pages/LostPassPage";
import LoginPage from "./pages/LoginPage";
import ToDoList from "./components/ToDoList";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route
                    path="/loginPage"
                    element={
                        <ProtectedRoute>
                            <LoginPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/lost-password" element={<LostPassPage/>} />
                <Route path="/ToDO-list"     element={<ToDoList/>} />
            </Routes>
        </div>
    );
}


export default App;
