import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './Calendar';
import style from './Pages.module.sass'

function Pages() {
  return (
    <div className={style.mainContainer}>
      <Switch>

        <Route exact path='/'>
          {/* <Home /> */}
        </Route>
        <Route path='/calendar' component={Calendar} />
        {/* <Calendar /> */}

        {/* <Route path='/about' component={About} />
      <Route path='/counter' component={CounterPage} />
      <Route path='*' component={NotFound} /> */}
      </Switch>
    </div>
  )
}
export default Pages;