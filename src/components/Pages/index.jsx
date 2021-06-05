import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Calendar from './Calendar';

function Pages() {
  return (

    <Switch>
      <Header />
      <Route exact path='/'>
        {/* <Home /> */}
      </Route>
      <Route path='/calendar' component={Calendar} />
        {/* <Contacts /> */}

      {/* <Route path='/about' component={About} />
      <Route path='/counter' component={CounterPage} />
      <Route path='*' component={NotFound} /> */}
    </Switch>

  )
}
export default Pages;