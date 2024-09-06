import { useState, useRef, useEffect } from 'react';

const url = "https://jsonplaceholder.typicode.com/todos"

function App() {
  const [mydata,setMyData] = useState(null);
  const [todosdata,setTodosData] = useState(null);
  const [isLoading,setIsLoading] = useState(true);


  const fetchData = async () => {
    const fetched_Data = await fetch(url);
    const json = await fetched_Data.json();
    setTodosData(json);
    setIsLoading(false);
    console.log("Fetched data!"); 
    console.log(json);
  }
  useEffect(()=>{
    
    try {
      
    } catch (error) {
      console.log("This is the error: "+ error);
    }
    
    },[]);

  return (
    <>
    <h1>Data Request and Response!!!</h1>
    {mydata && <ul>{mydata.map(
    (d=><li key={d.id}>{d.s1} {d.s2}</li>)
    )}</ul>}
    <button 
    onClick={()=> setMyData([{id:0,s1:"Hello this is the mydata"},{id:1,s2:"I am the next data piece!"}])}
    >
    Add
    </button>

    {isLoading && <div>Loading...</div>}
     {data && <div>The data passed in the data state!!!</div>}

     <ul>
      {todosdata && todosdata.map(
        (td=><li key={td.id}>{td.id} {td.title} {JSON.stringify(td.completed)}</li>)
      )}
      </ul>

      <button 
    onClick={()=> fetchData()}
    >
    FetchData
    </button>
      
    </>
  );
}

export default App;







  

  
  




