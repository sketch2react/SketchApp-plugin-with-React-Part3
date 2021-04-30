import React, {useState, useEffect } from 'react';

const useSketchData = (initialValue) => {
  const [sketchData, setData] = useState(initialValue);

  useEffect(() => {
    const handleSendDataEvent = (e) => {
      setData(e.detail.data);
    }

    window.addEventListener("send-data", handleSendDataEvent);
    return () => {
      window.removeEventListener("send-data", handleSendDataEvent);
    }
  }, [])
  
  const setSketchData = (data) => {
    window.postMessage('setSelectionName', data);
    setData(data);
  }
  
  return [sketchData, setSketchData];
}

export default useSketchData;