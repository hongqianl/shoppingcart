import React from 'react';

export function CardSmall({product}) {
  return (
    // <div className="flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-screen-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    //     <img className="object-cover rounded-t-lg h-48 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={require('../assets/1001.png')} alt=""/>
    //     <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021Sony Wh-Ch510 Bluetooth Wireless</h5>
    //     <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">$149</h5>
    //     <button className="bg-red text-white rounded-lg mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Remove</button>        
    // </div>
 <div className="flex items-center space-x-4 md:space-x-64 max-w-screen-xl border-2 border-slate-200 rounded-lg p-3 m-1">
    <div className="flex-shrink-0">
       <img className="w-32" src={require(`../assets/${product.ImagePath}`)} alt="Neil image"/>
    </div>
    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {product.Name}
    </div>
    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
       {product.Price}
    </div>
    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
    <button className="bg-red-500 rounded-lg text-white p-2 text-sm ">Remove</button>
    </div>

 </div>    

    
  );
}


