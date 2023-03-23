import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContextProvider } from './context/ContextProvider';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="insumo/">
            <Route path=":id" element={<Detail />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/carro" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
