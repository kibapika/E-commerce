import React from 'react';
import AppRoutes from './AppRoutes';
import {Navbar, Footer} from '../features/index';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
