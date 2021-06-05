import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages';
import Header from './components/Header';
import Footer from './components/Footer';


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
