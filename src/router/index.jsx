import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MainLayout from "../layouts/MaynLayout";
import User from "../pages/User";


function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/about'} element={<About/>} />
                    <Route path={'/contact'} element={<Contact/>} />
                    <Route path={'/user/:id'} element={<User/>} />
                </Route>
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </Router>
    )
};


export default AppRouter