import { useState } from "react";
import classes from "./form.module.scss";



function Form({ addBlog }) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function handleInputChange(event) {
        if (event.target.name === "title") {
            setTitle(event.target.value);
        } else {
            setText(event.target.value)
        }
    }


    function addNewBlog(event) {

        event.preventDefault();

        if (title.length > 0 && text.length > 0) {
            const newBlog = {
                id: Math.random(),
                title: title,
                text: text
            };

            addBlog(newBlog);

            setText("");
            setTitle("");
        }
    }


    return (
        <form
            action=""
            onSubmit={addNewBlog}
        >
            <h1>Add Form</h1>
            <input
                value={title}
                type="text"
                name="title"
                onChange={handleInputChange}
            />
            <textarea
                value={text}
                cols="30"
                rows="10"
                name="text"
                onChange={handleInputChange}
            >

            </textarea>
            <button>
                Add
            </button>
        </form>
    )
}

export default Form