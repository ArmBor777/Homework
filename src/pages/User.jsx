import { useParams } from "react-router-dom"
import { USERS } from "../constant/main";
import classes from "./user.module.scss"

function User() {
    const { id } = useParams();

    const user = USERS.find(user => user.id === +id)
    return (
        <div className={classes.userCont}>
            <div>
                <img src={user.img} alt="" />
            </div>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.profession}</p>
            <p>{user.level}</p>
        </div>
    )
};

export default User