import React from 'react';
import { Box, Grid } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import MapIcon from '@material-ui/icons/Map';
export default function Footer() {

    return(<Box style={{backgroundColor: "#004a3c", color: "white "}}>
        <Grid container>
            <Grid item xs={12} sm={6}>
                <center>
                    <h4 class="h4_footer">Графік прийому громадян абонентським відділом:</h4>
                    <p>Понеділок – п’ятниця з 8,00 до 15,00<br/>
                    Субота та неділя – вихідний</p>
                </center>
            </Grid>
            <Grid item xs={12} sm={6}>
                <center>
                <h4 class="h4_footer">ТОВ &laquo;Чисте-Місто+&raquo;</h4>
                <p><MapIcon fontSize="small"/> м.Олешки, Вул. Поштова 21а, кв.1<br/>
                <MailIcon fontSize="small"/> chistemisto-plus@meta.ua<br/>
                <PhoneIcon fontSize="small"/><a class="tel" href="tel:+380505021086"> +38(050)5021086</a><br/></p>
                </center>
            </Grid>
        </Grid>
    </Box>);
}