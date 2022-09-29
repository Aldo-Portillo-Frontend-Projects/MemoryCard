import './App.css';
import Card from './Card';
import { nanoid } from 'nanoid' 

function App() {

  const data = [
    {key: 1, value: "card one", isClicked: false},
    {key: 2, value: "card two", isClicked: false},
    {key: 3, value: "card three", isClicked: false},
    {key: 4, value: "card four", isClicked: false},
    {key: 5, value: "card five", isClicked: false},
    {key: 6, value: "card six", isClicked: false},
    {key: 7, value: "card seven", isClicked: false},
    {key: 8, value: "card eight", isClicked: false},
  ]

  const dataRender = data.map(({value})=> {
    return <Card key={nanoid()} input={value}/>
  })

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <div className='card-container'>
        {dataRender}
      </div>
    </div>
  );
}

export default App;
