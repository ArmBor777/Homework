import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import moxes from "../../images/contemplative-reptile.jpg"
import DeleteIcon from '@mui/icons-material/Delete';

function Blog({ blog, deleteBlog }) {


    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={moxes}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blog.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        variant="outlined"
                        startIcon={<DeleteIcon/>}
                        onClick={() => deleteBlog(blog.id)}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Blog