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

// https://stackoverflow.com/questions/70450954/adding-input-from-textarea-form-to-a-list-with-react

export default function ToDoInput(props) {
   const state = {
        input: '',
        list: []
    }
return (
    <div>
        <form>
            <input type="text" onChange={(e) => props.setState({ input: e.target.value })} />
            <button type="submit" onClick={e => props.setState({list: [...props.state.list, props.state.input], input: '' })}>Add Item</button>
        </form>
    </div>
)




}