import logo from './logo.svg';
import './App.css';


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  // manages all components 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
In Progress        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


class Stack extends React.Component {
  // This will contain the week at a glance and the to do list 
  constructor(props){
    super(props);
  }

}

class Monthly extends React.Component {
  // will utilize the google dev tools and API to allow synchronicity between calendars 
  constructor(props){
    super(props);
  } 
  
}

class ToDo extends React.Component {
  // need to create an interactive list that will organize items based on importance - due date(?) - how long they've been on the list - reoccuring tasks (ie garbage) 

  constructor(props){
    super(props);
  }
  
  // function generate(element: React.ReactElement) {
  //   return [0, 1, 2].map((value) =>
  //     React.cloneElement(element, {
  //       key: value,
  //     }),
  //   );
  // }
  
  // const Demo = styled('div')(({ theme }) => ({
  //   backgroundColor: theme.palette.background.paper,
  // }));
  
  // export default function InteractiveList() {
  //   const [dense, setDense] = React.useState(false);
  //   const [secondary, setSecondary] = React.useState(false);
  
  //   return (
  //     <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
  //       <FormGroup row>
  //         <FormControlLabel
  //           control={
  //             <Checkbox
  //               checked={dense}
  //               onChange={(event) => setDense(event.target.checked)}
  //             />
  //           }
  //           label="Enable dense"
  //         />
  //         <FormControlLabel
  //           control={
  //             <Checkbox
  //               checked={secondary}
  //               onChange={(event) => setSecondary(event.target.checked)}
  //             />
  //           }
  //           label="Enable secondary text"
  //         />
  //       </FormGroup>
  //       <Grid container spacing={2}>
  //         <Grid item xs={12} md={6}>
  //           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
  //             Text only
  //           </Typography>
  //           <Demo>
  //             <List dense={dense}>
  //               {generate(
  //                 <ListItem>
  //                   <ListItemText
  //                     primary="Single-line item"
  //                     secondary={secondary ? 'Secondary text' : null}
  //                   />
  //                 </ListItem>,
  //               )}
  //             </List>
  //           </Demo>
  //         </Grid>
  //         <Grid item xs={12} md={6}>
  //           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
  //             Icon with text
  //           </Typography>
  //           <Demo>
  //             <List dense={dense}>
  //               {generate(
  //                 <ListItem>
  //                   <ListItemIcon>
  //                     <FolderIcon />
  //                   </ListItemIcon>
  //                   <ListItemText
  //                     primary="Single-line item"
  //                     secondary={secondary ? 'Secondary text' : null}
  //                   />
  //                 </ListItem>,
  //               )}
  //             </List>
  //           </Demo>
  //         </Grid>
  //       </Grid>
  //       <Grid container spacing={2}>
  //         <Grid item xs={12} md={6}>
  //           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
  //             Avatar with text
  //           </Typography>
  //           <Demo>
  //             <List dense={dense}>
  //               {generate(
  //                 <ListItem>
  //                   <ListItemAvatar>
  //                     <Avatar>
  //                       <FolderIcon />
  //                     </Avatar>
  //                   </ListItemAvatar>
  //                   <ListItemText
  //                     primary="Single-line item"
  //                     secondary={secondary ? 'Secondary text' : null}
  //                   />
  //                 </ListItem>,
  //               )}
  //             </List>
  //           </Demo>
  //         </Grid>
  //         <Grid item xs={12} md={6}>
  //           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
  //             Avatar with text and icon
  //           </Typography>
  //           <Demo>
  //             <List dense={dense}>
  //               {generate(
  //                 <ListItem
  //                   secondaryAction={
  //                     <IconButton edge="end" aria-label="delete">
  //                       <DeleteIcon />
  //                     </IconButton>
  //                   }
  //                 >
  //                   <ListItemAvatar>
  //                     <Avatar>
  //                       <FolderIcon />
  //                     </Avatar>
  //                   </ListItemAvatar>
  //                   <ListItemText
  //                     primary="Single-line item"
  //                     secondary={secondary ? 'Secondary text' : null}
  //                   />
  //                 </ListItem>,
  //               )}
  //             </List>
  //           </Demo>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //   );
  // }
  
}

class Week extends React.Component {
// this week at a glance --> will highlight any and all activities - option to add in events which can be synced with the calendar -- communication between to do list and week at a glance to slot in list items 
}

export default App;
