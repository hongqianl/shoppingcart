import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


export function Card({product}) {
    const {productList, addToCart, removeFromCart} = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);
    const handleAction = ()=> {
        if ( isProductInCart) {
            removeFromCart(product.Id);
        }
        else {
            addToCart(product.Id);
        }
    }

    useEffect(()=>{
        setIsProductInCart(productList.find(x=>x === product.Id));
    },
    [productList]);

  return (

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="/productDetail">
        <img className="p-8 rounded-t-lg" src={require(`../assets/${product.ImagePath}`)} alt="product" />
    </Link>
    <div className="px-5 pb-5">
        <Link to="/productDetail">
            <h5 className="pb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.Name}</h5>
        </Link>
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">${product.Price}</span>
            <button onClick={ handleAction} 
              className={!isProductInCart ? "text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" :
              "text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"}>
                {isProductInCart ? 'Remove':'Add to cart'}
            </button> 
        </div>
    </div>
</div>

  );
}


