import React, { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight})
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({width: window.innerWidth, height: window.innerHeight})
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  return dimensions
}
const App = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <h2 data-testid='header-id'>Window Dimensions:</h2>
      <p data-testid='width-id'>Width: {width}</p>
      <p data-testid='height-id'>Height: {height}</p>
    </div>
  );
};

export default App;