import './App.css';

function App() {
  const age = 15
  const isGreen = false

  return (
  <div className="App">
    {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    <h1 style={{color: isGreen ? "green" : "red"}}>This has Color</h1>
    
    {isGreen && <button>Button</button>}
    
    <User name="Anna" age={21}/>
    <User name="Pedro" age={22}/>
  </div>
  );
}

const User = (props) => {
  return (
    <div className='name'>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
}

// const getName = () => { - js func
//   return "Anna"
// }

// const GetNameComponent = () => { - react comp
//   return <h1>Anna</h1>
// }


export default App;
