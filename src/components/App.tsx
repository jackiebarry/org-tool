import * as React from 'react';
import ToDo from './todo/ToDo';
import ToDoList from './todo/ToDoList';
import Month from './Month';
import StackedItems from './StackedItems';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import './App.css';


export default function App() {
  // manages all components 
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        justifyContent={'space-evenly'}
      >
        <StackedItems />
        <ToDo />

      </Stack>

    </div>
  );
}