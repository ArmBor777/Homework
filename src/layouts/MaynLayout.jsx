import { Outlet } from "react-router-dom"
import Footer from "../Components/templets/Footer"
import Header from "../Components/templets/Header"
import classes from "./maynLayout.module.scss"

function MainLayout(){

    return(
        <div className={classes.maynLayoutCont}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
};

export default MainLayout