import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let initial_state = {t : 'light'}
  const [theme,setTheme] = useState(initial_state);
  const [is_Light,setIsLight] = useState(true);
  function darkTheme(){
        
        setTheme({t :'dark'});
        setIsLight(is_Light ? theme.t =='dark': theme.t == 'light');
        
  }

  console.log(theme);
  console.log("Is theme light: " + is_Light);
  
        

     
  
return (
<>
  
  <p>The theme is: {theme.t}</p>
  <p>Is the theme light: {is_Light.toString()}</p>

  <button
  onClick = {darkTheme}
  >
  Click
  </button>

</>
);
}

export default App;
