import news from '../../static/news.jpg'
import { Box, CardMedia, Container, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Category from "../categoryList/Category";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Suggestions from '../suggestions/Suggestions';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailsPage = () => {

    const [blogDetails, setblogDetails] = useState([])
    const [postKeywords, setPostKeywords ] = useState('')
    let {slug} = useParams()
    useEffect( () => {
      const fetchData = async () => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs/${slug}`)
            setblogDetails(res.data) 
            setPostKeywords(res.data.keywords)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    }, [])


  return (
    <Container>
        <Category />
        <Typography variant="h3" align ="center" mt={4}>
        {blogDetails.title}
        </Typography>
        <Typography variant="body2" align="center" color="GrayText" p={4}>
            yazı yazı yazı yazı
        </Typography>
        <Typography variant="body1" align="center" m={2}> 
         {blogDetails.content}
        </Typography>
        <Box sx={{display:'flex', justifyContent:'center' }}>
            <CardMedia 
            sx={{height:'500px', width:'500px'}}
            component='img'
            image={blogDetails.image}
            alt='news'
            />
        </Box>
        <Typography variant="body1" align="center" m={2}>
            kasbjdkjabskdbaksbdvkasjvbdjkashvbjdh 
        </Typography>
        <Typography variant="h3" align="center" m={2} color={'green'}>
            {blogDetails.content2}
        </Typography>
        <Typography variant="h3" align="center" m={2} color={'green'}>
            Topic Headings
        </Typography>
        <List>
            {postKeywords.split(',').map((keywords)=>
            <ListItemButton>
            <ListItemIcon>
                <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={keywords} />
            </ListItemButton> )}

        </List>
        <Typography variant="body1" align="center" m={2}>
        {blogDetails.content2}
        </Typography>
        
    </Container>
  )
}

export default DetailsPage