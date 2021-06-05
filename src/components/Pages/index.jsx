import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import PageNotFound from './PageNotFound';
import Counter from './Counter';
import UserList from './UserList';
import style from './Pages.module.sass';

function Pages() {
  return (
    <div className={style.mainContainer}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/counter' component={Counter} />
        <Route path='/user-list' component={UserList} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </div>
  )
}
export default Pages;