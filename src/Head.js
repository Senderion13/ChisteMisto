import React from 'react';
import { Box, Button, Grid, ButtonGroup } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

export default function Head(){
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    } 
}  
return(<>
    <Grid container style={{backgroundImage: "url(/img/background_image.JPG)", backgroundPosition: "center center", backgroundAttachment: "fixed"}}>
            
            <Grid item xs={12} sm={6}>
                <center><a href="/"><img alt="Чисте Місто" src="/img/logo.png"/></a></center>
            </Grid>
            
            <Grid item xs={12} sm={6}>
            <center><h4><PhoneIcon fontSize="small"/><a style={{textDecoration: "none",color: "black"}} href="tel:+380505021086"> +38(050)5021086</a><br/>
            <MailIcon fontSize="small"/> chistemisto-plus@meta.ua<br/>
            <MapIcon fontSize="small"/> м.Олешки, Вул. Поштова 21а, кв.1</h4></center>
            </Grid>
            
        </Grid>
    <Box style={{fontSize: "17px"}}>
        <Grid container style={{alignContent: "center",backgroundColor: "#66CDAA"}}>
            <Grid item xs={0.5}/>
            <Box class="topnav" id="myTopnav">
                <Button class="head_button" variant="filled" href="javascript:void(0);" class="icon" onClick={myFunction}><MenuIcon/></Button>
                <Button variant="filled" href="/">Головна</Button>
                <Button variant="filled" href="/services">Послуги</Button>
                <Button variant="filled" href="/payment">Оплата</Button>
                <Button variant="filled" href="/public_info">Публічна інформація</Button>
                <Button variant="filled" href="/public_contract">Договір</Button>
                
            </Box>
            <Grid item xs={0.5}/>
        </Grid>
    </Box>
    </>);
}
