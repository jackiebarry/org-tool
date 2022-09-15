import { fontFamily } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
import ToDoListItem from './ToDoListItem';
import * as React from 'react';
import ToDoInput from './ToDoInput';

export default function ToDoList() {
    const [items, setItems] = React.useState([
        {id: 0, name: 'unpack', done: false},
        {id: 1, name: 'buy sugar', done: false},
        {id: 2, name: 'move home', done: true}
    ]);

    const onToggle = (id: number) => {
        const idx = items.findIndex(item => item.id === id);

        if (!idx) {
            return;
        }

        const copy = [...items];

        copy[idx].done = !copy[idx].done

        setItems(copy);
    };

    return (
        <List>
            {
                items.map(item => {
                    return <ToDoListItem key={item.id} item={item} onToggle={onToggle}/>
                })
            }
        <ToDoInput />
        </List>
    )
}