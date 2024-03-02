import './App.css';
import Home from './component/home';
import Navbar from './component/navbar'
import About from './component/about'
import Contact from './component/contact'
import Footer from './component/footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
