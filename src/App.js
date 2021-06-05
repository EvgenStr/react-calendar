import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Pages/Header';
import Footer from './components/Pages/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
