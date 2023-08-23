import React from 'react';
import {Routes, Route  } from 'react-router-dom';
import { ProductList, Cart, PageNotFound } from '../pages';

export function AllRoutes() {
  return (
    <main className='main mx-auto dark:bg-slate-700'>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </main>
  );
}


