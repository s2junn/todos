import React from "react";
import RootRouter from "../../routes";

import "./App.css";

import { TodoProvider } from "../../store/contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className={`todo-app`}>
        <RootRouter></RootRouter>
      </div>
    </TodoProvider>
  );
}

export default App;
