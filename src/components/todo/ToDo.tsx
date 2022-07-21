import { fontFamily } from '@mui/system';
import * as React from 'react';

export default class ToDo extends React.Component {
    // need to create an interactive list that will organize items based on importance - due date(?) - how long they've been on the list - reoccuring tasks (ie garbage) 

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            alignContent: 'normal'
        }

        return (
            <h1 style={style}>blah</h1>
        )
    }
}

