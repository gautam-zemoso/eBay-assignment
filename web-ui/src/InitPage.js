import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SellHub from './SellHub';
import PaymentPage from './PaymentReport';
import Payment from './Payment';

export default () => (

      <BrowserRouter>
        <Switch>
          <Route path="/page3" component={SellHub} exact />
          <Route path="/page2" component={PaymentPage} />
          <Route path="/" component={Payment} />
        </Switch>
      </BrowserRouter>
  
);
