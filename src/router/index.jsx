import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import User from "../pages/user/User";
import Blogs from "../pages/blog/Blogs";


function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/about'} element={<About/>} />
                    <Route path={'/contact'} element={<Contact/>} />
                    <Route path={'/user/:id'} element={<User/>} />
                    <Route path={'/blogs'} element={<Blogs/>} />
                </Route>
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </Router>
    )
};


export default AppRouter