import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Community from './pages/Community';
import Support from './pages/Support';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/catalog' element={<Catalog />} />

        <Route path='/community' element={<Community />} />

        <Route path='/support' element={<Support />} />

        <Route path='/auth' element={<Auth />} />

        <Route path='/register' element={<Register />} />
        
        <Route path='/cart' element={<Cart />} />

        <Route
  path='*'
  element={<NotFound />}
/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;