import { CircularProgress, Grid, Paper } from "@mui/material"
import { useSelector } from 'react-redux';
import IframeViewer from "../components/IframeViewer";
import ResuorceButtonForm from "../components/ResuorceButtonForm";
import ResourceList from "../components/ResourceList";

import { RootState } from "../reducers";
import InputResourceImage from "../components/InputResourceImage";
import ToastAlert from "../components/ToastAlert";
import { useEffect, useState } from "react";
const ResourceView = () => {

    const { selectedPost, addPostError, addPostDone, addPostLoading } = useSelector((state: RootState) => state.resource)
    const [toastVisible, setToastVisible] = useState(false);
    useEffect(() => {
        console.log("addPostDone : ", addPostDone)
        console.log("addPostError : ", addPostError)
        if (addPostDone || addPostError) {
            setToastVisible(true);
            const timer = setTimeout(() => {
                setToastVisible(false);
            }, 3000); // 4초 뒤에 토스트를 숨김
            return () => {
                clearTimeout(timer);
            };
        }
    }, [addPostDone, addPostError]);
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
                {addPostDone && toastVisible && <ToastAlert text="성공하셨습니다." bgColor="#4D99DE" textColor="white" />}
                {addPostError && toastVisible && <ToastAlert text={addPostError} bgColor="#EA4343" textColor="white" />}
                {addPostLoading && <CircularProgress sx={{ position: "absolute", top: "50%", left: "12.5%" }} />}
            </Grid>
            <Grid item xs={12} md={12} lg={9} >
                <Paper
                    sx={{
                        background: "#F7F7F7"

                    }}
                >
                    {selectedPost?.content && <IframeViewer selectedPost={selectedPost} />}
                    {/* <InputResourceImage /> */}
                </Paper>
            </Grid>


        </Grid >
    )
}

export default ResourceView;