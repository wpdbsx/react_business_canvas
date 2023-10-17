import { CircularProgress } from "@mui/material"
import { useSelector } from 'react-redux';
import IframeViewer from "../components/IframeViewer";
import ResuorceButtonForm from "../components/ResuorceButtonForm";
import ResourceList from "../components/ResourceList";
import { RootState } from "../reducers";
import ToastAlert from "../components/ToastAlert";

const ResourceView = () => {

    const { selectedPost, addUrlError, addUrlDone, addImageDone, addImageError } = useSelector((state: RootState) => state.resource)

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

                        display: 'flex',
                        flexDirection: 'column',
                        background: "#F7F7F7",
                        alignItems: "center",
                        overflow: "auto",
                        width: "280px",
                        height: "750px",


                    }}
                >
                    <ResourceList />
                </div>
            </div>
            <div style={{ width: "1px" }}></div>
            <div
                style={{
                    background: "#F7F7F7",
                    width: "919px",
                    height: "800px"

                }}
            >
                {selectedPost?.content && <IframeViewer selectedPost={selectedPost} />}
            </div>
            {(addUrlDone || addImageDone) && <ToastAlert text="성공하셨습니다." bgColor="#4D99DE" textColor="white" />}
            {(addUrlError || addImageError) && <ToastAlert text={(addUrlError || addImageError)} bgColor="#EA4343" textColor="white" />}
            {(addUrlError || addImageError) && <CircularProgress sx={{ position: "absolute", top: "40%", left: "50%" }} />}
        </div >
    )
}

export default ResourceView;