import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';


function App() {
  return (
    <>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </div>
    </>
  )
}

export default App;
