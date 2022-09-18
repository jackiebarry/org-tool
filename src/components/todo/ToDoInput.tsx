import { fontFamily } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material/';
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
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
        <IconButton  onClick={e => props.onSubmit(buildTodo()) }>
            <AddCircleOutline fontSize="small" sx={{ color: 'pink'}}/>
        </IconButton>
        <input type="text" onChange={e => setText(e.target.value)} />
        
    </div>
)

}