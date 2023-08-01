import news from '../../static/news.jpg'
import { Box, CardMedia, Container, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Category from "../categoryList/Category";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Suggestions from '../suggestions/Suggestions';

const DetailsPage = () => {
  return (
    <Container>
        <Category />
        <Typography variant="h3" align ="center" mt={4}>
            Title
        </Typography>
        <Typography variant="body2" align="center" color="GrayText" p={4}>
            yazı yazı yazı yazı
        </Typography>
        <Typography variant="body1" align="center" m={2}> 
         yaayyayayayasıduyanısutdıausbtdıbaustdıuatsduıatdub
        </Typography>
        <Box sx={{display:'flex', justifyContent:'center' }}>
            <CardMedia 
            sx={{height:'500px', width:'500px'}}
            component='img'
            image={news}
            alt='news'
            />
        </Box>
        <Typography variant="body1" align="center" m={2}>
            kasbjdkjabskdbaksbdvkasjvbdjkashvbjdh
        </Typography>
        <Typography variant="h3" align="center" m={2} color={'green'}>
            Konu Başlıkları
        </Typography>
        <List>
            <ListItemButton>
            <ListItemIcon>
                <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary='Earth' />

            </ListItemButton>
        </List>
        <Typography variant="body1" align="center" m={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex vel tellus faucibus
        </Typography>
        <Typography variant="h5" color={"white"} bgcolor={"grey"} align="center">
            You may also like 
        </Typography>
        <Suggestions/>
    </Container>
  )
}

export default DetailsPage