import { fontFamily } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
import { pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { inputAdornmentClasses } from '@mui/material';
import * as React from 'react';


export default function ToDoInput(props) {
    const [text, setText] = React.useState<string>('')

    const buildTodo = ()=> {
        return {
            name: text,
            done: false
        }
    }

return (
    <div>
        <input type="text" onChange={e => setText(e.target.value)} />
        <button onClick={e => props.onSubmit(buildTodo()) }>Add Item</button>
    </div>
)

}