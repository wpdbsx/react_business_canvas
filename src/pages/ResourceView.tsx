import { Grid, Paper } from "@mui/material"
import IframeViewer from "../components/IframeViewer";
import ResuorceButtonForm from "../components/ResuorceButtonForm";
import ResourceList from "../components/ResourceList";
const ResourceView = () => {


    return (
        <Grid container spacing={1}  >
            <Grid item xs={12} md={10} lg={2} >
                <Paper

                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '95vh',
                        background: "#F7F7F7",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <ResuorceButtonForm />
                    <ResourceList />
                </Paper>
            </Grid>
            <Grid item xs={12} md={10} lg={10} >
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
        </Grid >
    )
}

export default ResourceView;