import React from 'react';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp'

export default function Public_info(){
    return(<>
        <Grid container style={{backgroundColor: "#E0FFFF"}}>
            <Grid item xs={1}/>
            <Grid item xs>
                <center><p style={{fontFamily: 'Lobster', fontSize: "2em"}}>Публічна інформація</p></center>
            </Grid>
            <Grid item xs={1}/>
        </Grid>

        <Grid container>
            <Grid item xs={1} sm={2}/>
            <Grid item xs>
                <p>З 01 липня 2020 року відповідно до рішення виконавчого комітету Олешківської
                    міської ради від 13.03.2020 р. №964 «Про визначення виконавця послуг з вивезення
                    побутових відходів на території Олешківської міської ради» вивезення твердих побутових
                    відходів та великогабаритних відходів з урахуванням операцій поводження з побутовими 
                    відходами (збирання, перевезення, знешкодження, захоронення) винесено окремою послугою, 
                    право на здійснення якої виборюється на конкурсних засадах, за виключенням об'єднань співвласників
                    багатоквартирних будинків та житлово-будівельних кооперативів, котрі особисто визначаються з виконавцем 
                    послуг на вивіз побутових відходів.<br/><br/>
                    Публічний договір про надання послуг з вивезення побутових відходів власникам (наймачам, орендарям)
                    квартир в багатоквартирних житлових будинках та власникам (наймачам, орендарям) житла в будинках 
                    приватного сектору міста Олешки опубліковано на <a href="/public_contract">сайті ТОВ «ЧИСТЕ-МІСТО+»</a></p>
            </Grid>
            <Grid item xs={1} sm={2}/>
        </Grid>

        <Grid container>
            <Grid item xs={1} sm={2}/>
            <Grid item xs>
                <h3>Нормативно-правова база</h3>
                <ul type="disc">
                    <li><h4>Закон України «Про житлово-комунальні послуги» №2189-VIII від 09.11.2017р</h4></li> 
                    <li><h4>Правила надання послуг з вивезення побутових відходів №1070 від 10.12.2008р</h4></li>
                    <li><h4>Закон України «Про відходи» №187/98 від 05.03.1998р.</h4></li>
                    <li><h4>Рішення Олешківської міської ради № 964 від 13.03.2020року</h4></li> 
                    <li><h4>Рішення Олешківської міської ради № 137 від 19.06.2020 року</h4></li>
                    <li><h4>Рішення Олешківської міської ради № 45 від 07.02.2020 року</h4></li>
                </ul>
                <Grid container justify="space-around">
                    <Button href="/files/964.pdf" download variant="outlined" color="primary">№964<GetAppIcon/></Button>
                    <Button href="/files/137.pdf" download variant="outlined" color="primary">№137<GetAppIcon/></Button>
                    <Button href="/files/45.pdf" download variant="outlined" color="primary">№45<GetAppIcon/></Button>
                </Grid><br/><br/>
            </Grid>
            <Grid item xs={1} sm={2}/>
        </Grid>
    </>);
}