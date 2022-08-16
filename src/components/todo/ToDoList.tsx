import { fontFamily } from '@mui/system';
import * as React from 'react';

export default class ToDoList extends React.Component {
    // need to create an interactive list that will organize items based on importance - due date(?) - how long they've been on the list - reoccuring tasks (ie garbage) 

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            alignContent: 'normal',
            fontFamily: 'copperplate',
            color: '#ff69b4',
        }

return (
            <div id="listItems" style ={style}>
                    <ul>
                        <li>Baby slippers for Megan </li>
                        <li>Baby slippers for Pikes </li>
                        <li>Baby slippers for Koady</li>
                    </ul>
            </div>
        )
        }
}