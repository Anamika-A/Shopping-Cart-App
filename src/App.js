
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
