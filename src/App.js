import './App.css';
import Card from './Card';

import React from 'react';

import levels from './data'

function App() {

  
  const [score, setScore] = React.useState(0)

  const [level, setLevel] = React.useState(1) //USe state to check is clicked

  const [data, setData] = React.useState(levels(level))



  // React.useEffect(()=> {
  //   const allCardsClicked = data.every(data => data.isClicked === true)


  //   console.log(allCardsClicked)
  //   if(allCardsClicked){
  //     setLevel(prevLevel => prevLevel + 1) //Maybe instead of setting level when all cards are clicked it should be done when a certain score is met
  //   }                                      //I only needed is clicked to reset score if it has already clicked but when score is equal to 0 i should use an effect that makes all the values back to 0
  // }, [data])

  React.useEffect(()=>{
    setData(levels(level))
  },[level])

  React.useEffect(()=> { //I will need a case for 0 score that makes all isClicked false, followed by an array.length === to score to srt level to the next one
    if(score === data.length){
      setLevel(prevLevel => prevLevel + 1)
      setScore(0)
    } else if (score === 0){
      setData(prevData => prevData.map(card => {
        return {...card, isClicked: false};
      }))
    }
  },[score])

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //setData(prevData => shuffle(prevData))
  

  console.log(data.length)


  function modifyScore(id, isClicked) {

    if(isClicked === false){
      setScore(prevScore => prevScore + 1)
      setData(prevData => shuffle(prevData))
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
