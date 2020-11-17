import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './Users';
import UserInfo from './UserInfo';

const appRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Users />
        </Route>
        <Route path='/user/:userID'>
          <UserInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default appRouter;
