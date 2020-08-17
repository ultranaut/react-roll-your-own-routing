import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
  // we only need state so we can trigger a re-render
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // callback for our eventListener
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // listen for the `popstate` event dispatched by Link component
    window.addEventListener('popstate', onLocationChange);

    // cleanup eventListener on re-render
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
