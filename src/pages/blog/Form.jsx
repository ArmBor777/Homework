import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";


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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };


    return (
        <div>
            <Box sx={{ p: 3 }}>
                <h1>Add Form</h1>
                <form
                    onSubmit={handleSubmit}

                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Title"
                                fullWidth
                                onChange={handleInputChange}
                                name="title"
                                value={title}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                multiline
                                rows={4}
                                fullWidth
                                name="text"
                                onChange={handleInputChange}
                                value={text}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={addNewBlog}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default Form