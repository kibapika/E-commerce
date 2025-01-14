import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { me } from './store.js';
import {
  AllProducts,
  SingleProduct,
  Home,
  Checkout,
  Cart,
  AuthForm,
  SignUp,
  UserCart,
  Payment,
  UserInfo
} from '../features/index.js';
import { fetchProductsAsync } from '../slices/products/productSlice';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  // ADDED FOR TESTING
  // const isLoggedIn = false;

  useEffect(() => {
    dispatch(fetchProductsAsync());
    dispatch(me());
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<UserCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Sign In" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
