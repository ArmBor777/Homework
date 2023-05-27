import { useState } from "react";
import classes from "./blogs.module.scss";
import Blog from "./Blog";
import  Form  from "../blog/Form";



function Blogs() {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Title",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, fugiat asperiores. Quos suscipit aperiam magnam maiores ut nesciunt dolores, sint, adipisci quisquam assumenda dignissimos! Ullam perspiciatis animi rerum architecto libero!"
        }
    ])

    function deleteBlog(id){
        const updatedArr = blogs.filter((blog) => blog.id !== id);
        setBlogs(updatedArr);
    }

    function addBlog(newBlog){
        setBlogs([...blogs, newBlog]);
    }

    return (
        <div className={classes.blogsCont}>
            <div>
            {
                blogs.length
                    ?
                    blogs.map((blog) => {
                        return (
                            <Blog
                                blog={blog}
                                deleteBlog={deleteBlog}
                            />
                        )
                    })
                    :
                    "NO BLOG"
            }
            </div>           

            <Form
                addBlog={addBlog}
            />
        </div>
    )
};


export default Blogs
