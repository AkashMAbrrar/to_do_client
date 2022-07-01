import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Footer from './pages/Navbar/Footer';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <Routes>
        <Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
