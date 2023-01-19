import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductIndex from './components/ProductIndex';
import Navbar from './components/Navbar';
import BrandIndex from './components/BrandIndex';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductIndex />} />
        <Route path='/brands' element={<BrandIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
