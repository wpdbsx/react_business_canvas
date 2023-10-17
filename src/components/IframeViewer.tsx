import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress, Grid, Paper } from "@mui/material";
import styled from 'styled-components';
import { TypedIcon } from "typed-design-system";
import { useDispatch } from "react-redux";
import { SELECT_REMOVE_POST } from "../reducers/resource";
import { StyledUrlDiv } from "../styles/styles";
import { PostType } from "../types/types";

const StyledCloseDiv = styled.div`
 padding-top: 15px;
 padding-right:15px;
    
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

    console.log(selectedPost)
    return <>
        <Grid container spacing={0.1}>
            <Grid item xs={12}>
                <Paper sx={{ height: '50px', display: "flex", justifyContent: "space-between" }}>
                    <StyledUrlDiv $height="16px" $width="539px" style={{}}>{selectedPost.content}</StyledUrlDiv>
                    <StyledCloseDiv onClick={handleClickClose}>
                        <TypedIcon icon="close_19" size={19} />
                    </StyledCloseDiv>
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{ height: '750px', textAlign: "center" }}>
                {loading && <CircularProgress sx={{ position: "absolute", top: "50%", left: "60%" }} />}
                {selectedPost.status === "url" ? <iframe id={"my-iframe"} src={selectedPost.content} width={"100%"} height={"100%"} />
                    : <></>}
            </Grid>
        </Grid >

    </>;
}

export default React.memo(IframeViewer);