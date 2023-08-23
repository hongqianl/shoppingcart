import { useEffect } from 'react';

export function useSetTitle(title) {
    
    useEffect(()=>{
        window.document.title = title;
    }, [title]);
  return null;
}


