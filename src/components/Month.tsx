import * as React from 'react';
import * as jimbob from '@mui/material/Button';
import { 
  Button as Jimbob,
  Grid,
  ButtonGroup
 } from '@mui/material';

interface Favourites {
  food: string;
  drink: string;
  pet?: string;
}

interface Person {
  name: string;
  favourites: Favourites;
}

interface Foo {
  favourites: Favourites;
}

const person: Person = {
  name: 'devin',
  favourites: {
    food: 'nachos',
    drink: 'cold'
  }
}

export default class Month extends React.Component {
    // will utilize the google dev tools and API to allow synchronicity between calendars 
    constructor(props){
      super(props);

      this.state = {
        blah: true,
        bar: 'hello'
      }
    } 


    
  }

function FuncMonth(props) {
  const [blah, setBlah] = React.useState(false);
  const [bar, setBar] = React.useState('hello')

  const age = 50;

  return (
    <p>hi this is a func ${props.name}</p>
  )
}

function add(a: number, b: number): number {
    return a + b; 
};