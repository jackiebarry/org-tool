import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid'; 


const rows: GridRowsProp = [
  {id: 1, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: ''}  
];

const columns: GridColDef = [
    { field: 'col1', headerName: 'Sunday', width: 150},
    { field: 'col2', headerName: 'Monday', width: 150},
    { field: 'col3', headerName: 'Tuesday', width: 150},
    { field: 'col4', headerName: 'Wednesday', width: 150},
    { field: 'col5', headerName: 'Thursday', width: 150},
    { field: 'col6', headerName: 'Friday', width: 150},
    { field: 'col7', headerName: 'Saturday', width: 150},
];

export default function Week() {
    return (
    <div style={{height: 300, width: '100%' }}>
            //     <h1>This Week at a Glance</h1>
        <DataGrid rows={rows} columns={columns} />
    </div>
    );
}

