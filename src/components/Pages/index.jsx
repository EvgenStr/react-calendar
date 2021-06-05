import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';

function Pages() {
  return (

    <Switch>
      <Header />
      <Route exact path='/'>
        {/* <Home /> */}
      </Route>
      <Route path='/contacts'>
        {/* <Contacts /> */}
      </Route>
      {/* <Route path='/about' component={About} />
      <Route path='/counter' component={CounterPage} />
      <Route path='*' component={NotFound} /> */}
    </Switch>

  )
}
export default Pages;