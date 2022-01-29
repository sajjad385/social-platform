import {Routes, Navigate, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import SignupForm from "./components/signup-form.component";
import LoginForm from "./components/login-form.component";
import NotFound from "./components/not-found.component";
import Home from "./components/home.component";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<SignupForm/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route path="*"
                       element={<Navigate to="/404"/>}/>
            </Routes>
        </>
    );
}

export default App;
