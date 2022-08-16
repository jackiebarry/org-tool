import * as React from 'react';
import ToDo from './todo/ToDo';
import ToDoList from './todo/ToDoList';
import Month from './Month';
import Stack from './Stack';
import './App.css';


export default function App() {
  // manages all components 
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Stack />
      <Month />
      </div>
  );
}