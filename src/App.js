import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";
import React from "react";
import { AuthProvider } from "./components/auth";
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />} >
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />

        </Route>
        <Route path='users' element={<Users />} >
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="/*" element={<NoMatch />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
