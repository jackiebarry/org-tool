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

export default function ToDoListItemInput(props) {
    // const { item, onToggle } = props;
    

    // const style = {
    //     textDecoration: item.done ? 'line-through' : undefined
    // };

   
      return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Icon>add_circle</Icon>
          </FormControl>
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <Icon>add_circle</Icon>
              ),
            }}
            variant="standard"
          />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Icon>add_circle</Icon>
            <TextField id="input-with-sx" label="With sx" variant="standard" />
          </Box>
        </Box>
      );
    
    
//     return (
//         <ListItem style={style}>
//             <ListItemButton onClick={() => onToggle(item.id)}>
//                 <ListItemIcon>
//                     <Checkbox
//                         checked={item.done}
//                     />
//                 </ListItemIcon>
//                 <ListItemText primary={item.name} />
//                 <ToDoListItemInput />
//                 <Icon>add_circle</Icon>
                
//             </ListItemButton>
//         </ListItem>
//     )
}