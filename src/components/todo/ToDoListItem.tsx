import { fontFamily } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
// import { pink } from '@mui/material/colors';
// import Icon from '@mui/material/Icon';
import ToDoInput from './ToDoInput';
import * as React from 'react';
// import { inputAdornmentClasses } from '@mui/material';

export default function ToDoListItem(props) {
    const { item, onToggle } = props;
    

    const style = {
        textDecoration: item.done ? 'line-through' : undefined
    };


    return (
        <ListItem style={style}>
            <ListItemButton onClick={() => onToggle(item.id)}>
                <ListItemIcon>
                    <Checkbox
                        checked={item.done}
                    />
                </ListItemIcon>
                <ListItemText primary={item.name} />               
            </ListItemButton>
        </ListItem>
        
    )
}