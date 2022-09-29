import './App.css';
import Card from './Card';
import { nanoid } from 'nanoid' 
import React from 'react';

function App() {

  
  const [score, setScore] = React.useState(0)

  const data1 = [
    {key: nanoid(), value: "card one", isClicked: false},
    {key: nanoid(), value: "card two", isClicked: false},
    {key: nanoid(), value: "card three", isClicked: false},
    {key: nanoid(), value: "card four", isClicked: false},
    {key: nanoid(), value: "card five", isClicked: false},
    {key: nanoid(), value: "card six", isClicked: false},
    {key: nanoid(), value: "card seven", isClicked: false},
    {key: nanoid(), value: "card eight", isClicked: false},
  ]


  const [data, setData] = React.useState(data1)


  function modifyScore(id) {
    setScore(prevScore => prevScore + 1)
    setData(prevData => prevData.map(card => {
      return card.key === id ? {...card, isClicked: true} : card  ;
      
    }))
    console.log(id)
  }

  console.log(data)

  const dataRender = data.map(card => {
    return <Card key={card.key} input={card.value} clickHandle={() => modifyScore(card.key)} />
  })

  return (
    <div className="App">

      <h1>Memory Card Game</h1>
      <h2>Current Score: {score}</h2>
      <div className='card-container'>
        {dataRender}
      </div>
    </div>
  );
}

export default App;
