import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductIndex from './components/ProductIndex';
import Navbar from './components/Navbar';
import BrandIndex from './components/BrandIndex';
import Login from './components/Login';
import Register from './components/Register';
import RequestIndex from './components/RequestIndex';
import CreateRequest from './components/CreateRequest';
import Product from './components/Product';
import CreateProduct from './components/CreateProduct';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductIndex />} />
        <Route path='/products/create' element={<CreateProduct />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/brands' element={<BrandIndex />} />
        <Route path='/requests' element={<RequestIndex />} />
        <Route path='/newRequest' element={<CreateRequest />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
