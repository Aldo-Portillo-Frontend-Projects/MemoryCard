import './App.css';
import Card from './Card';

function App() {

  function clickCard() {
    console.log("I have been clicked")
  }
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <div className='card-container'>
        <Card input="rendered card"/>
        <Card input="rendered card"/>
        <Card input="rendered card"/>
        <Card input="rendered card"/>
      </div>
    </div>
  );
}

export default App;
