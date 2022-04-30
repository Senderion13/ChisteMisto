import React from 'react';
import { Grid, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Payment(){
    return(<>

        <Grid container style={{backgroundColor: "#E0FFFF"}}>
            <Grid item xs={1}/>
            <Grid item xs>
                <center><p style={{fontFamily: 'Lobster', fontSize: "2em"}}>Оплата</p></center>
            </Grid>
            <Grid item xs={1}/>
        </Grid>

    <Grid container>
            <Grid item xs={1} sm={2}/>
            <Grid item xs>
                <p>1. Вартість послуги з поводження з побутовими відходами на 1 людину в місяць, який проживає в будинку приватного сектору становить <b>35,67</b> грн.</p>
                <p>2. Вартість послуги з поводження з побутовими відходами на 1м2 загальної площі на місяць, що утворюються у багатоквартирних житлових будинках становить <b>1,71</b> грн\м2.</p>
                <p>3. Вартість послуги з поводження з побутовими відходами, що утворюються у багатоквартирних житлових будинках для ОСББ при заключенні колективного договору становить <b>191,33</b> грн\м3</p><br/>
                <p>Здійснювати оплату можна у відділеннях АТ КБ «ПРИВАТБАНК», АТ «ОЩАДБАНК» та ін., а також скориставшись системою «Приват 24», в терміналах за найближчими адресами, через інтернет, або скориставшись, зручними для вас, іншими платіжними системами.</p>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs>
            <center><h2>Реквізити для оплати послуг:</h2>
                <h4>ТОВ «ЧИСТЕ-МІСТО+»<br/>
            ЄДРПОУ: 42941391<br/>
            п/р: UA68 352479 00000 26009052226320<br/>
            ХЕРСОНСЬКА ФIЛIЯ АТ КБ &quot;ПРИВАТБАНК&quot;</h4>
            <Button href="/files/kvitancia.xls" download variant="outlined" color="primary"><a style={{marginRight: "1em"}}><b>Завантажити квитанцію</b></a><GetAppIcon/></Button><br/><br/></center>
            </Grid>
            <Grid item xs={1} sm={2}/>
    </Grid>
        
    </>);
}