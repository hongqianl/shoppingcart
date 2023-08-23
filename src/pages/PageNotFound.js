import React from 'react';
import { useSetTitle } from '../hooks/useSetTitle'; 

export function PageNotFound() {
  useSetTitle('Page Not Found') ;
  
  return (
    <div>
        Page not found
    </div>
  );
}


