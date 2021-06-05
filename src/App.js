import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Calendar from './components/Calendar';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/contacts'>
        <Contacts />
      </Route>
      <Route path='/about' component={About} />
      <Route path='/counter' component={CounterPage} />

      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
