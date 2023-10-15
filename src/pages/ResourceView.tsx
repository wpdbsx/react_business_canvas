import { Box, Button, Grid, Paper } from "@mui/material"

import ResourceList from "../components/ResourceList";
import IframeViewer from "../components/IframeViewer";
import AddButton from "../components/AddButton";
const List = () => {


    return (
        <Grid container >
            <Grid item xs={12} md={10} lg={1.5}>
                <Paper
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        background: "#F7F7F7",
                        alignItems: "center",
                    }}
                >
                    <AddButton />


                    <ResourceList />
                </Paper>

            </Grid>
            <Grid item xs={12} md={10} lg={9}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        background: "#F7F7F7"
                    }}
                >
                    <IframeViewer />
                </Paper>
            </Grid>
            {/* Recent Deposits */}

            {/* Recent Orders */}

        </Grid >
    )
}

export default List