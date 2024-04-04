import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import Toolbar from "./Toolbar";
import DarkModeContextProvider from "./DarkModeContextProvider";
import Card from "./Card";
import Products from "./Products";
export interface Todo {
  id: number;
  text: string;
  creator: string;
  creation_date: string;
}


function App() {

  const todos:Todo[] = [
    {
      id:1,
      text:"Megcsinálni ezt",
      creator: "Én voltam",
      creation_date: "2024.03.27",
    }, {
      id:2,
      text:"Aaami jóóó...",
      creator: "Én voltam",
      creation_date: "2024.03.27",
    }, {
      id:3,
      text:"De ami nem jó... Az ez itt!",
      creator: "Én voltam",
      creation_date: "2024.03.27",
    }, {
      id:4,
      text:"Eztet ez mi?",
      creator: "Én voltam",
      creation_date: "2024.03.27",
    }

  ]

  return (
      /*
      <DarkModeContextProvider>
        <Toolbar/>
        <TodoList todoList={todos}/>
      </DarkModeContextProvider>
      */
      <DarkModeContextProvider>
        <Toolbar/>
        <Products/>
      </DarkModeContextProvider>
  );
}

export default App;
