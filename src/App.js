import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Languages from './components/Languages/Languages';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Banner/>
      <Languages/>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App;
