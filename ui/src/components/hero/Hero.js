import { Box, Container, Grid, styled, Typography } from '@mui/material';
import software from '../../static/software.jpg';
import finans from '../../static/finans.jpg';
import news from '../../static/news.jpg';
import spor from '../../static/spor.jpg';
import Category from '../categoryList/Category';


const Hero = () => {
    const StyledCard = styled(Box)(({theme})=>({
        display: 'flex',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        cursor:'pointer',
        [theme.breakpoints.up('md')]:{
            height: 400,
        },
        [theme.breakpoints.down('md')]:{
            height: 200,
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
        color:"white",
        background:"green",
        fontSize:20,
    });
    const StyledWrapper =styled(Box)(({theme})=>({
        [theme.breakpoints.up('md')]:{
            paddingTop:'140%',
        },
        [theme.breakpoints.down('md')]:{
            paddingTop:'40%',
        },
        width: '80% ',
    }));
  return <Container>
        <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
            <Grid item md={3} xs={6}>
                <StyledCard sx={{backgroundImage:`url(${software})`}}>
                <StyledWrapper>
                <StyledTypography>Software</StyledTypography>
                </StyledWrapper>
                </StyledCard>
            </Grid>
            <Grid item md={3} xs={6}> 
                <StyledCard sx={{backgroundImage:`url(${finans})`}}>
                <StyledWrapper>
                <StyledTypography>Finance</StyledTypography>
                </StyledWrapper>
                </StyledCard>
            </Grid>
            <Grid item md={3} xs={6}>
                <StyledCard sx={{backgroundImage:`url(${news})`}}>
                <StyledWrapper>
                <StyledTypography>News</StyledTypography>
                </StyledWrapper>
                </StyledCard>
            </Grid>
            <Grid item md={3} xs={6}>
                <StyledCard sx={{backgroundImage:`url(${spor})`}}>
                <StyledWrapper>
                <StyledTypography>Sport</StyledTypography>
                </StyledWrapper>
                </StyledCard>
            </Grid>
        </Grid>
        <Category/>
    </Container>;
  
};

export default Hero;