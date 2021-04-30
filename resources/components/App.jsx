import React from 'react';
import useSketchData from '../hooks/useSketchData';

const App = () => {
  const [sketchData, setSketchData] = useSketchData();

  const handleButtonClick = (e) => {
    const newName = `${sketchData} 🦖`;
    setSketchData(newName);
  }

  return(<div>
    <p>{sketchData}</p>
    <button onClick={handleButtonClick}>Watch out for the dinosaur!</button>
  </div>)
}

export default App;