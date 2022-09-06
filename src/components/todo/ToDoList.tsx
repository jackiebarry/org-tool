import { fontFamily } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
import * as React from 'react';

export default function ToDoList() {
    const [checkedItem, setCheckedItem] = React.useState(false);

    function handleToggle() {
        setCheckedItem(!checkedItem);
    };

    const style = {
        textDecoration: checkedItem ? 'line-through' : undefined
    };

    return (
        <List style={style}>
            <ListItem>
                <ListItemButton onClick={handleToggle}>
                    <ListItemIcon>
                        <Checkbox
                            checked={checkedItem}
                        />
                    </ListItemIcon>
                    <ListItemText primary={'Baby Slippers for Megan'} />
                </ListItemButton>
            </ListItem>
        </List>
    )
}