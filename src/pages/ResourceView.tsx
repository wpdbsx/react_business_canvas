import { Grid, Paper } from "@mui/material"
import IframeViewer from "../components/IframeViewer";
import ResuorceButtonForm from "../components/ResuorceButtonForm";
import ResourceList from "../components/ResourceList";
import { useSelector } from 'react-redux';
import { RootState } from "../reducers";
const ResourceView = () => {

    const { selectedPost } = useSelector((state: RootState) => state.resource)
    return (
        <Grid container spacing={1}  >
            <Grid item xs={12} md={10} lg={2} >
                <Grid item xs={12}   >
                    <Paper

                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            background: "#F7F7F7",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <ResuorceButtonForm />
                    </Paper>
                </Grid>
                <Grid item xs={12}  >
                    <Paper

                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '89vh',
                            background: "#F7F7F7",
                            alignItems: "center",
                            position: "relative",
                            overflow: "auto"
                        }}
                    >
                        <ResourceList />


                    </Paper>
                </Grid>

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
                    {selectedPost?.content && <IframeViewer selectedPost={selectedPost} />}
                </Paper>
            </Grid>
        </Grid >
    )
}

export default ResourceView;