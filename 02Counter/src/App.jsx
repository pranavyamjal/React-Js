import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() 
{
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  const addValue = () => 
  {
    if (counter < 20) 
    {
      setCounter(prevCounter => 
        {
        const newCounter = prevCounter + 1;
        console.log("clicked", newCounter);
        return newCounter;
      });
      setMessage('');
    } 
    
    else 
    {
      console.log("MAX");
      setMessage('Exceed the MAX Value');
    }
  };

  //  const addValue = () =>
  //   {
  //     if (counter < 20) 
  //     {
  //       setCounter(counter + 1);
  //       setMessage('');
  //     } 
      
  //     else 
  //     {
  //       console.log("MAX");
  //       setMessage('Exceed the MAX Value');
  //     }
  //   };
  

  const removeValue = () => 
    {
    if (counter > 0) 
    {
      setCounter(prevCounter => prevCounter - 1);
      setMessage('');
    } 
    else 
    {
      console.log("MIN");
      setMessage('Exceed the MIN Value');
    }
  };

  return (
    <>
      <h1>Chai aur React || Vite</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>

      <p id='footer' style={{ color: 'red' }}>{message}</p>
    </>
  );
}

export default App;

/*

REACT STRICT MODE

Option 1: Ignore the double logs (recommended)
You can simply acknowledge that this double logging only happens in development mode and will not occur in production.

Option 2: Temporarily disable Strict Mode
If you prefer, you can disable React’s strict mode in your index.js or main.jsx file where the App component is rendered.

*/