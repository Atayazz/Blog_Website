import { Box, Grid, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostsCard from './PostsCard';
import axios from 'axios'

const Posts = () => {
  const [blog, setBlog] = useState([])
  
  useEffect( () => {
    const fetchData = async () => {
      try{
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs/`)
          setBlog(res.data) 
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
  }, [])
  return (
    <Box>
        <Typography variant='h4' align='center'>
          {" "}
          Latest Posts{" "}
        
        </Typography>
        <Grid 
         container 
         columnSpacing={{xs:0, sm:1, md:1}} 
         direction={"column"}
        >
          {blog.map(post => (
        <Grid item xs> 
        <PostsCard title={post.title} excerpt={post.excerpt} image={post.image} myDirection={'flex'} />
        </Grid>
          ))
           
          }
        </Grid>
            <Typography
            variant="h4"
            bgcolor={"black"}
            color="white"
            align="center"
            mt={4}
            mb={4}
            >
            Most Popular
            </Typography>
            <Grid 
        container 
        columnSpacing={{xs:0, sm:1, md:1}} 
        direction={"row"}
        >
            <Grid item md={6} sm={6}> 
            <PostsCard myDirection={'block'} />
            </Grid>
            <Grid item md={6} sm={6}>
            <PostsCard myDirection={'block'} />
            </Grid>
            <Grid item md={6} sm={6}> 
            <PostsCard myDirection={'block'} />
            </Grid>
            </Grid>
            <Stack spacing={2} mt={3} mb={3} justifyContent="center" alignItems={"center"} >            
              <Pagination count={10} color={"primary"}/>
          </Stack>
    </Box>
  )
}

export default Posts