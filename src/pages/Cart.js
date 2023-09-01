import React from 'react';
import { CardSmall } from '../components/CardSmall';
import { useSetTitle } from '../hooks/useSetTitle'; 
import { ProductService } from '../services/ProductService';
import { useCart } from '../context/CartContext';


export function Cart() {
    //const cart = [2, 3];
    const {allProducts: products} = ProductService();
    useSetTitle('Cart');
    const {productList, total} = useCart();

  return (
    <div className='flex flex-col mx-auto justify-center items-center dark:text-white' >
      <div >
        Cart Item: {productList.length}/${total}
      </div>
      <ul className="max-w-screen-xl divide-y divide-gray-200 dark:divide-gray-700">
        {productList.map((x)=>{
            const item = products.find((i)=>(i.Id === x));
            return item ? <li key={item.Id} className="pb-3"><CardSmall product={item}/></li> : '';
        })}
      </ul>
    </div>
  );
}
