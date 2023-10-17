import { CircularProgress } from "@mui/material"
import { useSelector } from 'react-redux';
import IframeViewer from "../components/IframeViewer";
import ResuorceButtonForm from "../components/ResuorceButtonForm";
import ResourceList from "../components/ResourceList";
import { RootState } from "../reducers";
import ToastAlert from "../components/ToastAlert";
import React from "react";

const ResourceView: React.FC = () => {

    const { selectedPost, addUrlError, addUrlDone, addImageDone, addImageError, addImageLoading, addUrlLoading } = useSelector((state: RootState) => state.resource)

    return (
        <div style={{
            width: "1200px", height: "800px", background: "#C4C4C4", display: 'flex'
        }}>
            <div>
                <div
                    style={{
                        background: "#FFFFFF",
                        width: "280px",
                        height: "50px",
                    }}
                >
                    <ResuorceButtonForm />
                </div >
                <div
                    style={{
                        background: "#F7F7F7",
                        alignItems: "center",
                        overflow: "auto",
                        width: "280px",
                        height: "749px",
                        marginTop: "1px",
                        boxShadow: "0px 2px 5px 0px #0000001A"
                    }}
                >
                    <ResourceList />
                </div>
            </div>

            <div
                style={{
                    background: "#F7F7F7",
                    width: "919px",
                    height: "800px",
                    marginLeft: "1px"
                }}
            >
                {selectedPost?.content && <IframeViewer selectedPost={selectedPost} />}
            </div>
            {(addUrlDone || addImageDone) && <ToastAlert text={(addImageDone || "성공하셨습니다.")} bgColor="#4D99DE" textColor="white" />}
            {(addUrlError || addImageError) && <ToastAlert text={(addUrlError || addImageError)} bgColor="#EA4343" textColor="white" />}
            {(addUrlLoading || addImageLoading) && <CircularProgress sx={{ position: "absolute", top: "40%", left: "50%" }} />}
        </div >
    )
}

export default React.memo(ResourceView);