import { Box,Card, Typography, CardMedia, TextField, IconButton } from '@mui/material';
import aaa from '../../static/aaa.jpeg'
import {Send as SendIcon} from '@mui/icons-material'


const Rightbar = () => {
  return (
    <Box sx={{padding:2}}>
      <Typography variant="h5" align="center" mt={5}>
        HEY! I am Ata
      </Typography>
      <CardMedia component={'img'} height='300' image={aaa} alt="aaa_image"
            sx={{width:'400px', cursor:'pointer', "&:hover":{
              opacity:0.8,
              boxSizing:'border-box',
              zIndex:1,
              transition:`all 0.50s ease`  
            },}} />
            <Typography align="left" variant="body1" >
            {" "}
            EXAMPLEEXAMPLEEXAMPLEEXAMPLEEX
            AMPLEEXAMPLEEXAMPLEEXAMPL. {" "}
            </Typography>
            <Typography align="left" variant="body1">
            {" "}
            Don't forget to subscribe! <br /> <a href="google.com">Read More</a>
            </Typography>
    <Card sx={{height:'200px', marginTop:2}}>
      <Typography align="center" variant="body1" >
        Ads hire
      </Typography>
    </Card>
    <Typography align="center" color='white' bgcolor='green' mt={2} >
      Subscribe Via E-Mail
    </Typography>
    <Box sx={{pl:10}}>
      <TextField label='Your Email Here!' variant="standard" color="success" 
      />
      <IconButton>
        <SendIcon sx={{ color:'green'}}/>
      </IconButton>
    </Box>
    <Card sx={{height:'200px', marginTop:2}}>
      <Typography align="center" variant="body1" >
        Ads hire
      </Typography>
    </Card> 
    </Box>
  )
};

export default Rightbar