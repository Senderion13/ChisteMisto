import React from 'react';
import { Grid, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Public_contract(){
    return(<>

        <Grid container style={{backgroundColor: "#E0FFFF"}}>
            <Grid item xs={1}/>
            <Grid item xs>
                <center><p style={{fontFamily: 'Lobster', fontSize: "2em"}}>Договір</p></center>
            </Grid>
            <Grid item xs={1}/>
        </Grid>

        <Grid container>
            <Grid item xs={1} sm={2}/>
            <Grid item xs>
                <h2>Шановні споживачі!</h2>
                <p>Відповідно до Закону України «Про житлово-комунальні послуги» необхідно укласти нові договори про надання комунальних послуг.
                Договір є публічним та відповідає Типовому договору  затвердженому постановою КМУ «Про затвердження Правил надання послуг з поводження 
                з побутовими відходами» від 27 березня 2008 р. № 318.<br/><br/>
                У разі, якщо співвласники багатоквартирного будинку не прийняли рішення про вибір моделі договірних відносин та не уклали з виконавцем 
                комунальної послуги відповідний договір  з ними укладається індивідуальний договір про надання комунальної послуги, що є публічним договором.<br/>
                Публічні договори про надання комунальних послуг з власниками індивідуальних  житлових будинків вважаються укладеними, якщо протягом 30 
                днів з моменту опублікування тексту договору на офіційному веб-сайті органу місцевого самоврядування та/або на сайті виконавця послуги, 
                такий власник не вчинив дій щодо відключення (відмови) від комунальної послуги».<br/> 
                При укладанні договорів ТОВ «ЧИСТЕ-МІСТО+» керується вимогами ст.633 Цивільного кодексу України :<br/><br/>
                «Стаття 633. Публічний договір<br/><br/>
                1. Публічним є договір, в якому одна сторона - підприємець взяла на себе обов'язок здійснювати продаж товарів, виконання робіт 
                або надання послуг кожному, хто до неї звернеться (роздрібна торгівля, перевезення транспортом загального користування, послуги 
                зв'язку, медичне, готельне, банківське обслуговування тощо).<br/><br/>
                2. Умови публічного договору встановлюються однаковими для всіх споживачів, крім тих, кому за законом надані відповідні пільги.»<br/><br/>

                Ознайомитися та укласти індивідуальний договір про надання послуг з поводження з побутовими відходами (вивезення сміття) можливо за посиланням нижче:</p><br/>
            
            </Grid>
            <Grid item xs={1} sm={2}/>
        </Grid>
        <Grid container justify="space-around">
            <center><Grid item xs sm >
                <h3>Індивідуальний договір для багатоповерхівок</h3>
                <Button href="/files/Dogovir_1.docx" download="Dogovir_1.docx" variant="outlined" color="primary">
                    <a style={{marginRight: "1em"}}><b>Завантажити</b></a><GetAppIcon/>
                </Button>
            </Grid></center>
            <center><Grid item xs sm>
                <h3>Індивідуальний договір для приватного сектору</h3>
                <Button href="/files/Dogovir_2.docx" download="Dogovir_2.docx" variant="outlined" color="primary">
                    <a style={{marginRight: "1em"}}><b>Завантажити</b></a><GetAppIcon/>
                </Button>
            </Grid></center>

        </Grid><br/><br/>
        
        <Grid container >
            <Grid item xs={1} sm={2}/>
            <Grid item xs>
                <h3>Порядок укладення договору</h3>
                <p>Згідно з правилами, при укладанні договорів споживач повинен надати такі документи:<br/>
                - копія паспорта;<br/>
                - копія довідки про присвоєння ІПН;<br/>
                - копія документа про підтвердження права власності або права користування на житлове приміщення;<br/><br/>
                Підписаний договір надати за  адресою:<br/><br/>
                75101, Херсонська область, Олешківський район, м.Олешки, Вул. Поштова 21а, кв.1<br/><br/>
                Додаткова інформація за телефоном — +38(050)5021086</p><br/>
                <h3>Для переоформлення особового рахунку при зміні власника надати:</h3>
                <ul type="dics">
                    <li>Свідоцтво на право власності</li>
                    <li>Паспорт власника</li>
                    <li>Індивідуальний податковий номер</li>
                    <li>Довідка про кількість зареєстрованих осіб</li>
                </ul>
            </Grid>
            <Grid item xs={1} sm={2}/>
        </Grid>
    </>);
}