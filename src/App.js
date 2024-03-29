import './App.css';
import Appbar from './Components/AppBar';
import Home from './Components/Home';
import { Routes,Route } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Appbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/product/:id" element={<Product/>} />
        <Route  path="/cart" element={<Cart/>} />
        {/* <Route  path="/about" element={<About/>} /> */}
        {/* <Route  path="/contact" element={<Contact/>} /> */}
      </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
