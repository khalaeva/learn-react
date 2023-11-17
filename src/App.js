import './App.css';
import { useState } from 'react';

function App() {
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor] = useState("red")
  
  return (
    <div className='App'>
      <button 
        onClick={() => {
          setTextColor("green")
          setShowText(!showText)
        }}
      >
        Show/Hide
      </button>
      {showText && <h1 style={{color: textColor}}>Hello World</h1>}
    </div>
  )
}

export default App;
