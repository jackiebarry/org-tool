import * as React from 'react';
import { Grid, Box } from '@mui/material';

const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export default function Week() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <h1>This Week at a Glance</h1>

            <Grid 
                container
                columnSpacing={3}
                // rowSpacing={3}
            >
                <Grid 
                    container
                    // rowSpacing={3}
                    // justifyContent={'space-evenly'}
                    columnSpacing={2}

                    columns={7}
                >
                    {WEEKDAY.map(day => {
                        return <Grid item sm={1} sx={{borderStyle: 'solid'}} textAlign='center'>
                            <Box>{day}</Box>
                        </Grid>
                    })}
                </Grid>
                <Grid 
                    container 
                    // rowSpacing={3}
                    columnSpacing={2}

                    // justifyContent={'space-evenly'}
                    columns={7}
                >
                    {WEEKDAY.map(col => {
                        return <Grid item sm={1} sx={{borderStyle: 'solid'}} textAlign='center'>
                            <Box>{'blah'}</Box>
                        </Grid>
                    })}
                </Grid>
            </Grid>

        </div>
    );
}

