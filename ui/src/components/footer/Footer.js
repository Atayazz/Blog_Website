import styled from '@emotion/styled';
import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const MenuBox =styled (Box)({
        display: "flex",
        gap: 30,
        cursor: "pointer",
    })
    const MenuItems = [
        {Name:"Home", Link: "#"},
        {Name:"Posts", Link: "#"},
        {Name:"About Me", Link: "#"},
        {Name:"Subscribe", Link: "#"}
    ];
  return (
        <Box sx={{ bgcolor:"green", height:"150px" }}>
            <Container>
                <Stack direction={'row'}>
                <MenuBox flex={2} sx={{display:{ xs: 'none', md: "flex"}}} >
                {MenuItems.map((item)=>(
                    <Typography variant='body2' color={'white'} > 
                    {item.Name}
                    </Typography>
                ) )}
            </MenuBox>
            <Box flex={1} color={"white"} mt={1} >
                Personal Website
            </Box>
                </Stack>
                <Typography variant="h4" align="center" mt={8} color={"white"}>
                    Subscribe!
                </Typography>
            </Container>
        </Box>
  )
}

export default Footer