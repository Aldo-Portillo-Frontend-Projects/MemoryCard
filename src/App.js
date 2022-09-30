import './App.css';
import Card from './Card';

import React from 'react';

import levels from './data'

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
      <div className='subHeader'>
        <h2>Current Score: {score}</h2>
        <h2>Level: {level}</h2>
      </div>
      <div className='card-container'>
        {dataRender}
      </div>
    </div>
  );
}

export default App;
