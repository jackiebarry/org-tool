import * as React from 'react';
import ToDo from './todo/ToDo';
import ToDoList from './todo/ToDoList';
import Week from './Week';

 export default function Stack() {
     return (
         <div className='Stack'>
             <Week />
             <ToDo />
             <ToDoList />
         </div>
     )
 }