import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Login from './components/Login';


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
