import { fontFamily } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
import ToDoListItem from './ToDoListItem';
import * as React from 'react';
import ToDoInput from './ToDoInput';

interface Todo {
    id: number;
    name: string;
    done: boolean;
}

export default function ToDoList() {
    let foo = 0;
    const [items, setItems] = React.useState<Todo[]>([
        {id: foo++, name: 'unpack', done: false},
        {id: foo++, name: 'buy sugar', done: false},
        {id: foo++, name: 'move home', done: true}
    ]);
    const [count, updateCount] = React.useState(foo++)

    const onToggle = (id: number) => {
        const idx = items.findIndex(item => item.id === id);

        if (!idx) {
            return;
        }

        const copy = [...items];

        copy[idx].done = !copy[idx].done

        setItems(copy);
    };

    const appendList = (todo: Omit<Todo, 'id'>) => {
        setItems([...items, {
            id: count + 1,
            ...todo
        }])
        updateCount(count + 1)
    };

    return (
        <List>
            {
                items.map(item => {
                    return <ToDoListItem key={item.id} item={item} onToggle={onToggle}/>
                })
            }
        <ToDoInput onSubmit={appendList} />
        </List>
    )
}