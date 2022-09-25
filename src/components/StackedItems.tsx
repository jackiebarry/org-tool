import * as React from 'react';
import ToDo from './todo/ToDo';
import ToDoList from './todo/ToDoList';
import Week from './Week';
import Month from './Month';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

 export default function stackedItems() {
     return (
         <div className='Stack'>
             <Stack 
             spacing={4}
             divider={<Divider orientation="horizontal" flexItem />}>
             <Week />
             <Month />
             </Stack>
         </div>
     )
 }