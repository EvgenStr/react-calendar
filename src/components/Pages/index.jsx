import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './Calendar';
import PageNotFound from './PageNotFound';
import Counter from './Counter';
import style from './Pages.module.sass';

function Pages() {
  return (
    <div className={style.mainContainer}>
      <Switch>

        <Route exact path='/'>
          {/* <Home /> */}
        </Route>
        <Route path='/calendar' component={Calendar} />
        <Route path='/counter' component={Counter} />
        {/* <Route path='/about' component={About} />
      <Route path='/counter' component={CounterPage} />*/}
        <Route path='*' component={PageNotFound} />
      </Switch>
    </div>
  )
}
export default Pages;