import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Stack } from '@mui/material';


const rows: GridRowsProp = [
    { id: 1, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' }
];

const GridColumns = [
    { field: 'col1', headerName: 'Sunday ', items: '1 '},
    { field: 'col2', headerName: 'Monday ', items: '2 '},
    { field: 'col3', headerName: 'Tuesday ', items: '3 '},
    { field: 'col4', headerName: 'Wednesday ', items: '4 '},
    { field: 'col5', headerName: 'Thursday ', items: '5 '},
    { field: 'col6', headerName: 'Friday ', items: '6 '},
    { field: 'col7', headerName: 'Saturday ', items: '7 '},
];

export default function Week() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <h1>This Week at a Glance</h1>
            <Stack spacing={5}>
                {GridColumns.map(col => {
                    return col.headerName
                })}
                {GridColumns.map(col => {
                    return col.items
                })}
            </Stack>
            {/* <Stack spacing={5}>
                {GridColumns.map((col, i) => {
                    return i
                })}
            </Stack> */}

        </div>
    );
}

