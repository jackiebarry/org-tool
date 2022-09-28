import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Stack } from '@mui/material';


const rows: GridRowsProp = [
    { id: 1, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' }
];

const GridColumns = [
    { field: 'col1', headerName: 'Sunday ' },
    { field: 'col2', headerName: 'Monday ', },
    { field: 'col3', headerName: 'Tuesday ', },
    { field: 'col4', headerName: 'Wednesday ', },
    { field: 'col5', headerName: 'Thursday ', },
    { field: 'col6', headerName: 'Friday ', },
    { field: 'col7', headerName: 'Saturday', },
];

export default function Week() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <h1>This Week at a Glance</h1>
            {/* <DataGrid rows={rows} columns={GridColumns} /> */}
            <Stack spacing={5}>
                {GridColumns.map(col => {
                    return col.headerName
                })}
            </Stack>
            <Stack spacing={5}>
                {GridColumns.map((col, i) => {
                    return i
                })}
            </Stack>

        </div>
    );
}

