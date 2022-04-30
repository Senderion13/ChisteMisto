import React from 'react';
import Golovna from './Pages/Golovna';
import Services from './Pages/Services';
import Payment from './Pages/Payment';
import Public_info from './Pages/Public_info';
import Public_contract from './Pages/Public_contract';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Body(){
    return(<BrowserRouter>
        <Route exact path='/' component={Golovna}/>

        <Route path='/services' component={Services}/>

        <Route path='/payment' component={Payment}/>

        <Route path='/public_info' component={Public_info}/>

        <Route path='/public_contract' component={Public_contract}/>
    </BrowserRouter>);
}
