import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './pages/cart/Cart';
import Category from './pages/manager/category/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import Order from './pages/order/Order';
import Product from './pages/manager/product/Product';
import ProductDetail from './pages/productDetail/ProductDetail';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/product/management" element={<Product />} />
          <Route path="/category/management" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
