import { Box, Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import software from '../../static/software.jpg'

const PostsCard = ({myDirection}) => {
  return (
    <Box mt={3} > 
        <Link href="http://localhost:3002/details" sx={{textDecoration:"none"}}>

        <Card>
          <Box sx={{display: {xs:"block", sm:`${myDirection}`,  md:`${myDirection}`}, flexDirection:"row"}}>
            <CardMedia component={"img"} height="300" image={software} alt="software_image"
            sx={{width:"400px", cursor:"pointer", "&:hover":{
              opacity:0.8,
              boxSizing:"border-box",
              zIndex:1,
              transition:`all 0.50s ease`  
            },}} />
            <CardContent>
              <Typography gutterBottom variant="h4" align="center"> 
              For Example
              </Typography>
              <Typography  variant="h5" color="text.secondary "> 
              For ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor Example
              For ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor ExampleFor Example 
              </Typography>
              <CardActions>
                <Button sx={{ color: "green"}} size="large">
                  Share
                </Button>
                <Button sx={{ color: "green"}} size="large">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
        </Link>
    </Box>

  );
};

export default PostsCard;