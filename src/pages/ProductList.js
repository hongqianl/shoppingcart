import React from 'react';
import { Card } from '../components/Card';
import { ProductService } from '../services/ProductService';
import { useSetTitle } from '../hooks/useSetTitle';


export function ProductList() {
  const {allProducts: products} = ProductService();
  useSetTitle('Home');

  return (
    <div className='flex gap-5 flex-wrap justify-start items-center dark:bg-slate-700'>
      {products.map((x)=>(<Card key={x.Id} className="m-5" product={x}/>))}
    </div>
  );
}


