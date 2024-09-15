import { useState } from "react";

function Todo(){
      
      const [todo,setTodo] = useState(null);
      const [todos,setTodos] = useState(
        [{id:0,todo:"Study code!"},
          {id:1,todo:"Cook"},
          {id:2,todo:"Exercise"},
          {id:3,todo:"Eat"}
      ]);
      let nextId = todos.length-1;
      
          return(
  
              <>
              <h1>Todo App</h1>
              <input 
              value={todo}
              onChange={e=>setTodo(e.target.value)}
              />
              <button onClick={()=>{
              setTodos([ ...todos,{ id: nextId++, todo: todo }]);
              }}>
                Add
              </button>
              <ul>
        {todos.map(td => (
          <li key={td.id}>
            <input
              type="checkbox"
             
            />
            {td.todo}{' '}
            <button onClick={()=>{
             setTodos(todos.filter(todo =>todo.id !== td.id));
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
             
                    
                  
              
             
                
              </>
          );

};
export default Todo;