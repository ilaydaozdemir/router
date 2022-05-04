import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="/*" element={<NoMatch />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </>
  );
}

export default App;
