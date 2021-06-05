import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Pages from './components/Pages'

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
