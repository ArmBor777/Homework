import { Outlet } from "react-router-dom"
import Footer from "../Components/templets/Footer"
import Header from "../Components/templets/Header"
import classes from "./mainLayout.module.scss"

function MainLayout(){

    return(
        <div className={classes.mainLayoutCont}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
};

export default MainLayout