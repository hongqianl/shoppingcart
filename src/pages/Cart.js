import React from 'react';
import { CardSmall } from '../components/CardSmall';
import { useSetTitle } from '../hooks/useSetTitle'; 
import { ProductService } from '../services/ProductService';

export function Cart() {
//    const {localCart: cart} = CartService();
    const cart = [2, 3];
    const {allProducts: products} = ProductService();
    useSetTitle('Cart');

  return (
    <div className='flex flex-col mx-auto justify-center items-center dark:text-white' >
      <div >
        Cart Item: {cart.length}
      </div>
      <ul class="max-w-screen-xl divide-y divide-gray-200 dark:divide-gray-700">
        {cart.map((x)=>{
            const item = products.find((i)=>(i.Id === x));
            return item ? <li key={item.Id} class="pb-3"><CardSmall product={item}/></li> : '';
        })}
      </ul>
    </div>
  );
}
