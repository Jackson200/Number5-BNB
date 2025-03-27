import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * A hook that scrolls the window to the top when the route changes
 */
export const useScrollTop = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
};