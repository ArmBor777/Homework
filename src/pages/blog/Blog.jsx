


function Blog({blog, deleteBlog}){


    return(
        <div>
            <button
                onClick={() => deleteBlog(blog.id)}
            >
                X
            </button>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
        </div>
    )
}

export default Blog