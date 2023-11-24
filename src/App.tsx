import './App.css';
import { Person, Country } from './Person';

function App() {

  // const getAge = (name: string): number => {
  //   return 22
  // }

  return (
    <div className="App">
        <Person
          name="Anna"
          email="asdsa"
          age={22}
          isMarried={false}
          friends={['sdfs', 'sdfsf', 'fgdfgd']}
          country={Country.Russia}
        />
    </div>
  );
}

export default App;
