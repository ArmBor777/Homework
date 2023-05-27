import { useNavigate } from "react-router-dom"
import { USERS } from "../../constant/main"
import classes from "./home.module.scss"
function Home(){

    const navigate = useNavigate()

    return(
        <div className={classes.homeCont}>
            <h1>Members of our company</h1>
            {
                USERS.map((user) => {
                    return(
                        <div
                            onClick={() => navigate(`/user/${user.id}`)}
                        >
                            
                            <p>{user.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Home