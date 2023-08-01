import {  Typography, styled, Box, Stack } from "@mui/material";
import software from '../../static/software.jpg';
import finans from '../../static/finans.jpg';
import news from '../../static/news.jpg';
import spor from '../../static/spor.jpg';

const Suggestions = () => {
    const StyledCard = styled(Box)(({theme})=>({
        display: 'flex',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow:'hidden',
        width: '100px',
        cursor:'pointer',
        [theme.breakpoints.up('md')]:{
            height: 100,
        },
        [theme.breakpoints.down('md')]:{
            height: 100,
        },
        "&:hover":{
            opacity:0.8,
            boxSizing: 'borderBox',
            zındex:1,
            transition:`all 0.45s ease`,
        }
    }));
    const StyledTypography = styled(Typography)({
        textAlign:"center",
        color:"black",
        fontSize:20,
    });
    const CardBox = styled (Box)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',

    });
  return (
    <Stack Container direction={'row'} justifyContent="center" alignItems={"center"} mt={4} spacing={3} ml={3} 
    sx={{overflow:'auto'}}>
    
        <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${software})`}}></StyledCard>
            <StyledTypography>Software</StyledTypography>
        </CardBox>
        <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${finans})`}}></StyledCard>
            <StyledTypography>Finance</StyledTypography>
        </CardBox>
        <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${news})`}}></StyledCard>
            <StyledTypography>News</StyledTypography>
        </CardBox> <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${spor})`}}></StyledCard>
            <StyledTypography>Sport</StyledTypography>
        </CardBox> <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${software})`}}></StyledCard>
            <StyledTypography>Software</StyledTypography>
        </CardBox> <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${software})`}}></StyledCard>
            <StyledTypography>Software</StyledTypography>
        </CardBox> <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${software})`}}></StyledCard>
            <StyledTypography>Software</StyledTypography>
        </CardBox> <CardBox>
            <StyledCard sx={{ backgroundImage:`url(${software})`}}></StyledCard>
            <StyledTypography>Software</StyledTypography>
        </CardBox>
    </Stack>
  ) 
}

export default Suggestions;