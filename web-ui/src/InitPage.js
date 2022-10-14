import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SellHub from './SellHub';
import PaymentPage from './PaymentReport';
import Payment from './Payment';

const InitPage  = () => (

      <BrowserRouter>
        <Switch>
          <Route path="/page2" component={SellHub} exact />
          <Route path="/page1" component={PaymentPage} />
          <Route path="/" component={Payment} />
        </Switch>
      </BrowserRouter>
  
);

export default InitPage;