import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputvalue] = useState('')

  const handleInputchange = (event) => {
    setInputvalue(event.target.value)
  }
  
  return (
    <div className='App'>
      <input type="text" onChange={handleInputchange}/>
      {inputValue}
    </div>
  )
}

export default App;
