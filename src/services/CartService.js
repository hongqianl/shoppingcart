import {setState} from 'react';

export function CartService({cart}) {
    const [localCart, setLocalCart] = setState(cart ? cart : []);
    setLocalCart(...2, 3);

  return {localCart};
}


