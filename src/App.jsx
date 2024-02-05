import React from "react";
import { Title } from "./componentes/Title";
import { Todoinput } from "./componentes/Todoinput"; 
import { TodoList } from "./componentes/TodoList";
import { Todo } from "./componentes/Todo/Todo";
function App() {
  

  return (
    <>
    <div className="bg-body min-h-screen h-full font-Sixtyfour text-gray-100 flex items-center justify-center py-20 px-5">   

   <div className="container flex flex-col max-w-xl" >
      <Title />
      <Todoinput />
        <TodoList>
          <Todo/>
        </TodoList>

    </div>
     

    </div>
  
</>
  );
}

export default App
