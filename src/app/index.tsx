import { Provider } from 'react-redux';
import { store } from '../store';
import { Navigation } from '../entities/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductsList } from '../pages/products-list';
import { ProductPage } from '../pages/product-page';
import { AboutPage } from '../pages/AboutPage';
import React from 'react';
import { ModalState } from '../context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ModalState>
          <Provider store={store}>
            <Navigation />
            <Routes>
              <Route path='/' element={<Navigate to='/products' />}></Route>

              <Route path='/products' element={<ProductsList />}>
              </Route>
              <Route path='/products/:id' element={<ProductPage />} />

              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </Provider>
        </ModalState>
      </BrowserRouter>
    </>
  );
};