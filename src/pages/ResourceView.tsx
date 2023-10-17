import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CircularProgress, Grid, Paper } from "@mui/material"
import { useSelector } from 'react-redux';
import IframeViewer from "../components/IframeViewer";
import ResuorceButtonForm from "../components/ResuorceButtonForm";
import ResourceList from "../components/ResourceList";
import { RootState } from "../reducers";
import ToastAlert from "../components/ToastAlert";

const ResourceView = () => {

    const { selectedPost, addUrlError, addUrlDone, addUrlLoading, addImageLoading, addImageDone, addImageError } = useSelector((state: RootState) => state.resource)



    return (
        <Grid container spacing={0.5} sx={{ height: "100.3vh", background: "#C4C4C4" }} >
            <Grid item xs={12} md={12} lg={3} >
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            background: "#F7F7F7",
                            height: '6vh',
                            minHeight: '77.45px'
                        }}
                    >
                        <ResuorceButtonForm />
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper
                        sx={{
                            height: '94vh',
                            display: 'flex',
                            flexDirection: 'column',
                            background: "#F7F7F7",
                            alignItems: "center",
                            overflow: "auto",

                        }}
                    >
                        <ResourceList />


                    </Paper>
                </Grid>
                {(addUrlDone || addImageDone) && <ToastAlert text="성공하셨습니다." bgColor="#4D99DE" textColor="white" />}
                {(addUrlError || addUrlError) && <ToastAlert text={addUrlError} bgColor="#EA4343" textColor="white" />}
                {(addUrlLoading || addImageLoading) && <CircularProgress sx={{ position: "absolute", top: "50%", left: "11.5%" }} />}

            </Grid>
            <Grid item xs={12} md={12} lg={9} >
                <Paper
                    sx={{
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