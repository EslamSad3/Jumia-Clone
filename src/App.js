
import './App.css';
import Navbar from './components/shared/Navbar/Navbar';
import Banner from './components/shared/Banner/Banner';
import Languages from './components/shared/Languages/Languages';
import Home from './pages/Home/Home';
import  Route  from '../src/router/index';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
      <Route />
  </BrowserRouter>
  );
}

export default App;
