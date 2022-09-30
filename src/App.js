import './App.css';
import Card from './Card';
import { nanoid } from 'nanoid' 
import React from 'react';

function App() {

  
  const [score, setScore] = React.useState(0)

  const [level, setLevel] = React.useState(1) //USe state to check is clicked

  const [data, setData] = React.useState(levels(level))



  React.useEffect(()=> {
    const allCardsClicked = data.every(data => data.isClicked === true)


    console.log(allCardsClicked)
    if(allCardsClicked){
      setLevel(2)
    }
  }, [data])

  React.useEffect(()=>{
    setData(levels(level))
  },[level])
  function levels (level) {
    if (level === 1) {
      return [
        {key: nanoid(), value: "card one", isClicked: false},
        {key: nanoid(), value: "card two", isClicked: false},
        {key: nanoid(), value: "card three", isClicked: false},
        {key: nanoid(), value: "card four", isClicked: false},
        {key: nanoid(), value: "card five", isClicked: false},
        {key: nanoid(), value: "card six", isClicked: false},
        {key: nanoid(), value: "card seven", isClicked: false},
        {key: nanoid(), value: "card eight", isClicked: false},
      ]
    } else if (level === 2) {
      return [
        {key: nanoid(), value: "card one", isClicked: false},
        {key: nanoid(), value: "card two", isClicked: false},
        {key: nanoid(), value: "card three", isClicked: false},
        {key: nanoid(), value: "card four", isClicked: false},
        {key: nanoid(), value: "card five", isClicked: false},
        {key: nanoid(), value: "card six", isClicked: false},
        {key: nanoid(), value: "card seven", isClicked: false},
        {key: nanoid(), value: "card eight", isClicked: false},
        {key: nanoid(), value: "card nine", isClicked: false},
        {key: nanoid(), value: "card ten", isClicked: false},
        {key: nanoid(), value: "card eleven", isClicked: false},
        {key: nanoid(), value: "card twelve", isClicked: false},
      ]
    }
  }

  


  function modifyScore(id, isClicked) {

    if(isClicked === false){
      setScore(prevScore => prevScore + 1)
    } else {
      setScore(0)
    }


    setData(prevData => prevData.map(card => {
      return card.key === id ? {...card, isClicked: true} : card  ;
    }))


    console.log(id)
  }

  console.log(data)

  const dataRender = data.map(card => {
    return <Card key={card.key} input={card.value} clickHandle={() => modifyScore(card.key, card.isClicked)} />
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
