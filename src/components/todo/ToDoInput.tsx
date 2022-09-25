import { fontFamily } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
import { AddCircleOutline, SpaceBar } from '@mui/icons-material/';
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import * as React from 'react';


export default function ToDoInput(props) {
    const [text, setText] = React.useState<string>('')

    const buildTodo = ()=> {
        const todo = {
            name: text,
            done: false
        }

        // Clear text field
        setText('');

        return todo;
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            props.onSubmit(buildTodo())
        }
    }
    
return (
    <div>
        <IconButton  onClick={e => props.onSubmit(buildTodo())}>
            <AddCircleOutline fontSize="medium" sx={{ color: 'teal'}}/>
        </IconButton>
        <input 
            value={text} 
            type="text" 
            onChange={e => setText(e.target.value)} 
            onKeyPress={handleKeyPress} 
        />
        
    </div>
)

}