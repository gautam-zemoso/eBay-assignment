import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SellHub from './SellHub';
import PaymentPage from './PaymentReport';
import Payment from './Payment';

export default () => (

      <BrowserRouter>
        <Switch>
          <Route path="/" component={SellHub} exact />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/paymentTables" component={Payment} />
        </Switch>
      </BrowserRouter>
  
);
