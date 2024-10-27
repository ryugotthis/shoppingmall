import React from 'react';
import ProductDetail from './page/ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  console.log('우회시키기');
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
