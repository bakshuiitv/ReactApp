import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './Routes';
import 'nprogress/nprogress.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: '20px' }}>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
