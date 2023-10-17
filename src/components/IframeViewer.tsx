import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
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



            const ElementId = selectedPost.status === 'url' ? "my-iframe" : 'my-image'
            setLoading(true); // iFrame 로딩 시작 

            const iframe = document.getElementById(ElementId) as HTMLIFrameElement;
            const loadListener = () => {
                setLoading(false);
            };
            iframe?.addEventListener('load', loadListener);

            return () => {
                setLoading(false);
                iframe?.removeEventListener('load', loadListener)

            }

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
        <div style={{
            height: '50px', display: "flex", justifyContent: "space-between", background: "white",
            boxShadow: "0px 2px 5px 0px #0000001A"
        }}>
            <StyledUrlDiv $height="16px" $width="539px" style={{ cursor: "pointer" }} >
                <a style={{ textDecoration: "none", color: "black" }} href={selectedPost.content} target="_blank" rel="noopener noreferrer">{selectedPost.content}</a></StyledUrlDiv>
            <StyledCloseDiv onClick={handleClickClose}>
                <TypedIcon icon="close_19" size={19} />
            </StyledCloseDiv>
        </div >

        <div style={{ height: '749px', textAlign: "center", marginTop: '1px' }}>
            {selectedPost.status === "url" ?
                <iframe id={"my-iframe"} src={selectedPost.content} width={"99%"} height={"99%"} />
                :
                <>
                    <img id="my-image" src={selectedPost.content} style={{ width: "99%", height: "99%", border: "1px solid black" }} />
                </>}
        </div>
        {loading && <CircularProgress sx={{ position: "absolute", top: "40%", left: "50%" }} />}
    </>;
}

export default React.memo(IframeViewer);