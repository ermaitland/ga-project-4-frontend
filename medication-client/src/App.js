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
import EditProduct from './components/EditProduct';
import Brand from './components/Brand';
import CreateBrand from './components/CreateBrand';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductIndex />} />
        <Route path='/products/create' element={<CreateProduct />} />
        <Route path='/editProducts/:id' element={<EditProduct />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/brands' element={<BrandIndex />} />
        <Route path='/brands/create' element={<CreateBrand />} />
        <Route path='/brands/:id' element={<Brand />} />
        <Route path='/requests' element={<RequestIndex />} />
        <Route path='/newRequest' element={<CreateRequest />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
