import React, { useState } from 'react'
import {AppBar, Box, Drawer, Link, List, ListItem, ListItemButton, styled, TextField, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    })
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
    const [openMenu,setOpenMenu] = useState(false)
  return (
    <>
    <AppBar color='default' position='sticky' elevation={0}>
        <StyledToolbar>
            <Box flex={{xs:25, md:1 }}>
                <Typography variant='h4' color={'green'} sx={{fontFamily:'Bebas Neue sans-serif', textAlign: {xs:'center', md:'left'}}}> 
                Atayağız Uslu
                </Typography>
            </Box>
            <MenuBox flex={1} sx={{display:{ xs: 'none', md: "flex"}}} >
                {MenuItems.map((item)=>(
                    <Typography variant='body2' color={'black'}> 
                    {item.Name}
                    </Typography>
                ) )}
            </MenuBox>
            <Box flex={1}>
                <TextField sx={{display:{ xs: 'none', md: "flex"}}} 
                color="success" 
                label="Search Here!" 
                variant="standard" 
                />
                <MenuIcon
                    sx={{display:{ xs: "flex", md:"none" }, cursor: "pointer" }} 
                    onClick={()=>setOpenMenu(!openMenu)}
                    />
            </Box>
        </StyledToolbar>
        <Drawer
        anchor={'top'}
        open={openMenu}
        onClose={()=> setOpenMenu(!openMenu)}

        > 
        <List>
            <ListItem>
            {MenuItems.map((item)=>(
                    <ListItemButton>{item.Name}</ListItemButton>
                ) )}
            </ListItem>
        </List>
        <TextField sx={{display:{ xs: 'flex', md: "none"}}} 
                color="success" 
                label="Search Here!" 
                variant="outlined" 
                />
        </Drawer>

    </AppBar>
    <Box sx={{display:'flex', justifyContent:'center', flexDirection:{xs:'column', md:'row', padding: 1,}}} >
    <Typography align="center" variant="h5" mr={{xs:0, md:1}}>

    </Typography>
    <Typography  variant="h5" color={'green'} align="center" sx={{fontFamily:'Bebas Neue sans-serif'}} >
        Kişisel Blog Websitesi
    </Typography>
</Box>
</>
  );
};

export default Navbar;