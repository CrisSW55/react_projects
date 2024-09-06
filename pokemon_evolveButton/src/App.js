import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { image_List } from './imported_ImagesList';




const init_pokemon = [
  {id:0,pokemonName:'pichu',type:'electric',img:image_List.pichu},
  {id:1,pokemonName:'squirtle',type:'water',img:image_List.squirtle},
  {id:2,pokemonName:'charmander',type:'fire',img:image_List.charmander},
  {id:3,pokemonName:'bulbasaur',type:'grass/poison',img:image_List.bulbasaur},]


function App() {

  const[pokemon,setPokemon]= useState(init_pokemon);
  const[select_evolve,setSelectPokemon]= useState(pokemon[0]);

  
  let key = 0;
  return (
    <>
    <h2 
    style= {{flex:'display',justifyContent:"center",alignContent:"center"}}
    >
    Pokemon
    </h2> 

   {/* Devolve button */}
     <button style= {{marginBottom:'50px'}}onClick={() =>{

setSelectPokemon(pokemon.map(p=>{
   key = p.id
   if(key === p.id && p.pokemonName ==='pikachu'){
       p.pokemonName = 'pichu';
       p.img = image_List.pichu;

   }

   else if(key === p.id && p.pokemonName ==='raichu'){
    p.pokemonName = 'pikachu';
    p.img = image_List.pikachu;

}
   else if(key === p.id && p.pokemonName ==='wartortle'){
    p.pokemonName = 'squirtle';
    p.img = image_List.squirtle;

}
else if(key === p.id && p.pokemonName ==='blastoise'){
  p.pokemonName = 'wartortle';
  p.img = image_List.wartortle;

}
else if(key === p.id && p.pokemonName ==='charmeleon'){
  p.pokemonName = 'charmander';
  p.img = image_List.charmander;

}
else if(key === p.id && p.pokemonName ==='charizard'){
p.pokemonName = 'charmeleon';
p.img = image_List.charmeleon;

}

else if(key === p.id && p.pokemonName ==='ivysaur'){
p.pokemonName = 'bulbasaur';
p.img = image_List.bulbasaur;

}

else if(key === p.id && p.pokemonName ==='venusaur'){
p.pokemonName = 'ivysaur';
p.img = image_List.ivysaur;

}

}));

}}>Devolve Pokemon</button>

 {/* Evolve button */}
 <button style= {{marginBottom:'50px'}}onClick={() =>{

setSelectPokemon(pokemon.map(p=>{
   key = p.id
   if(key === p.id && p.pokemonName ==='pichu'){
       p.pokemonName = 'pikachu';
       p.img = image_List.pikachu;

   }

   else if(key === p.id && p.pokemonName ==='pikachu'){
    p.pokemonName = 'raichu';
    p.img = image_List.raichu;

}
   else if(key === p.id && p.pokemonName ==='squirtle'){
    p.pokemonName = 'wartortle';
    p.img = image_List.wartortle;

}
else if(key === p.id && p.pokemonName ==='wartortle'){
  p.pokemonName = 'blastoise';
  p.img = image_List.blastoise;

}
else if(key === p.id && p.pokemonName ==='charmander'){
  p.pokemonName = 'charmeleon';
  p.img = image_List.charmeleon;

}
else if(key === p.id && p.pokemonName ==='charmeleon'){
p.pokemonName = 'charizard';
p.img = image_List.charizard;

}

else if(key === p.id && p.pokemonName ==='bulbasaur'){
p.pokemonName = 'ivysaur';
p.img = image_List.ivysaur;

}

else if(key === p.id && p.pokemonName ==='ivysaur'){
p.pokemonName = 'venusaur';
p.img = image_List.venusaur;

}

}));

}}>Evolve Pokemon</button>

    <div style={{display: 'flex',flexDirection: 'row'}}>
    <p>{pokemon[0].pokemonName}</p>
   <img src= {pokemon[0].img} alt={pokemon[0].pokemonName}  width="200" height="200"/>

   <p>{pokemon[1].pokemonName}</p>
   <img src= {pokemon[1].img} alt={pokemon[1].pokemonName} width="200" height="200"/>
   
   <p>{pokemon[2].pokemonName}</p>
   <img src= {pokemon[2].img} alt={pokemon[2].pokemonName}  width="200" height="200"/>

   <p>{pokemon[3].pokemonName}</p>
   <img src= {pokemon[3].img} alt={pokemon[3].pokemonName}  width="200" height="200"/>

    </div>
   

    
    

   
   </>
   
  );
}

export default App;
