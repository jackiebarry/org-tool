import { fontFamily } from '@mui/system';
import * as React from 'react';
import ToDoList from './ToDoList';

//  export default function toDo(listItems) {
//     const style = {
//         alignContent: 'normal',
//         fontFamily: 'copperplate',
//         color: '#ff69b4',
//     }

//     return (
//         <h1 style={style}>Do This</h1>
//     ) 
// };
export default function ToDo() {
return (  
<div className='ToDo'>
            <h1>Do This</h1>
    <ToDoList />
</div>
  
)
}