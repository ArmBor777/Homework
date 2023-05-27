
import classes from "./contact.module.scss"

function Contact() {

    return (
        <div className={classes.contactCont}>
            <form action="" >
                <label for="name">Ваше имя</label>
                <input type="text" id="name" required></input>
                <label for="email">Ваш Email</label>
                <input type="email" id="email" required></input>            
                <label for="message">Ваше сообщение</label>
                <textarea rows="5" id="message" required></textarea>
                <input type="submit" value="Отправить сообщение"></input> 
        </form>
        </div>
    )
};

export default Contact