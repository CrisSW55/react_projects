import './App.css';
import TicTacToe from './TicTacToe.js';
import {useState} from 'react';
function App() {
  const [isGameLoading,setIsGameLoading] = useState(true);

  function loadGame(){
    setTimeout(()=>{setIsGameLoading(false)},3000);
  }
  loadGame();
  return (
    <> {isGameLoading  ? <h1 className='col'>Loading Game Data...</h1> 
              : <TicTacToe/>}
    

    </>
  );
}

export default App;
