import React, { useCallback } from "react";
import { Grid, Paper } from "@mui/material";
import styled from 'styled-components';
import { TypedIcon } from "typed-design-system";
import { useDispatch } from "react-redux";
import { SELECT_REMOVE_CONTENT, postType } from "../reducers/resource";

const StyledDiv = styled.div`
    width:70%;
    margin: 0 auto;
    transform: translate(0, 120%);
    font-size:14px;
    line-height:16.41px;

`
const StyledCloseDiv = styled.div`
 
    padding-right: 40px;
    float:right;
`
const IframeViewer: React.FC<{ selectedPost: postType }> = ({ selectedPost }) => {

    const dispatch = useDispatch();
    const handleClickClose = useCallback(() => {
        try {
            dispatch({ type: SELECT_REMOVE_CONTENT })
        } catch (e) {
            console.log(e)
        }
    }, [])

    return <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper sx={{ height: '6vh' }}>
                    <StyledDiv >{selectedPost.content}</StyledDiv>
                    <StyledCloseDiv onClick={handleClickClose} id="12343">
                        <TypedIcon icon="close_19" size={24} />
                    </StyledCloseDiv>
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{ height: '90vh', textAlign: "center" }}>
                <iframe src={selectedPost.content} width={"90%"} height={"90%"} />
            </Grid>

        </Grid>
    </>;
}

export default IframeViewer;