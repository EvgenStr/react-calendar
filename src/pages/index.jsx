import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Calendar from '../components/Calendar';
import PageNotFound from '../components/PageNotFound';
import Counter from '../components/Counter';
import UserList from '../components/UserList';
import style from './pages.module.sass';

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