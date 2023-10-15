import { Box, Button, Grid, Paper } from "@mui/material"

import ResourceItem from "../components/ResourceItem";
import IframeViewer from "../components/IframeViewer";
import AddButton from "../components/AddButton";
const List = () => {


    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={10} lg={2}>
                <Paper
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        height: '95vh',
                        background: "#F7F7F7",
                        alignItems: "center",
                    }}
                >
                    <AddButton />


                    <ResourceItem />
                </Paper>

            </Grid>
            <Grid item xs={12} md={10} lg={10}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '95vh',
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