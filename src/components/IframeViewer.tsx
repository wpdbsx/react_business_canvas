import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress, Grid, Paper } from "@mui/material";
import styled from 'styled-components';
import { TypedIcon } from "typed-design-system";
import { useDispatch } from "react-redux";
import { SELECT_REMOVE_POST, PostType } from "../reducers/resource";

const StyledDiv = styled.div`
    float:left;
    font-size:25px;
    line-height:16.41px;
    text-align: justify;
    /* height:100%; */
    margin-left: 15px;
    margin-top:30px;
`
const StyledCloseDiv = styled.div`
 
    padding-right: 40px;
    margin-top:20px;
    float:right;
`
const IframeViewer: React.FC<{ selectedPost: PostType }> = ({ selectedPost }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        try {

            setLoading(true); // iFrame 로딩 시작 

            const iframe = document.getElementById("my-iframe") as HTMLIFrameElement;
            const loadListener = () => {
                setLoading(false);
            };
            iframe?.addEventListener('load', loadListener);

            return () => (
                iframe?.removeEventListener('load', loadListener)
            )
        } catch (e) {
            console.log(e)
        }
    }, [selectedPost])


    const handleClickClose = useCallback(() => {
        try {
            dispatch({ type: SELECT_REMOVE_POST })

        } catch (e) {
            console.log(e)
        }
    }, [])

    return <>
        <Grid container spacing={0.1}>
            <Grid item xs={12}>
                <Paper sx={{ height: '6vh', minHeight: '77.45px' }}>
                    <StyledDiv>{selectedPost.content}</StyledDiv>
                    <StyledCloseDiv onClick={handleClickClose}>
                        <TypedIcon icon="close_19" size={24} />
                    </StyledCloseDiv>
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{ height: '94vh', textAlign: "center" }}>
                {loading && <CircularProgress sx={{ position: "absolute", top: "50%", left: "60%" }} />}
                <iframe id={"my-iframe"} src={selectedPost.content} width={"99%"} height={"99%"} />
            </Grid>
        </Grid>

    </>;
}

export default React.memo(IframeViewer);