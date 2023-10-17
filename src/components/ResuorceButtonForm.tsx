import { useCallback, useState } from "react";
import InputResourceUrl from "./InputResourceUrl";
import InputResourceImage from "./InputResourceImage";
import { StyledButton } from "../styles/styles";


const ResuorceButtonForm = () => {
    const [openUrlInput, setOpenUrlInput] = useState(false);

    const [openImageInput, setOpenImageInput] = useState(false);

    const handleUrlOpen = useCallback((e: React.MouseEvent) => {
        try {
            setOpenUrlInput(true);
            handleImageClose();
        } catch (e) {
            console.log(e)
        }
    }, [])
    const handleUrlClose = useCallback(() => {
        try {
            setOpenUrlInput(false);
        } catch (e) {
            console.log(e)
        }
    }, [])
    const handleImageOpen = useCallback((e: React.MouseEvent) => {
        try {
            setOpenImageInput(true);
        } catch (e) {
            console.log(e)
        }
    }, [])

    const handleImageClose = useCallback(() => {
        try {
            setOpenImageInput(false);
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <>
            <div style={{ background: 'white' }}>
                <div>
                    <StyledButton $width={'125px'} $height={'30px'} sx={{ float: "left", margin: "10px" }} onClick={handleUrlOpen}>
                        URL 추가
                    </StyledButton>
                    <StyledButton $width={'125px'} $height={'30px'} sx={{ float: "right", margin: "10px 10px 10px 0" }} onClick={handleImageOpen}>
                        이미지 추가
                    </StyledButton>
                </div>
            </div>
            {openUrlInput && <InputResourceUrl handleInputClose={handleUrlClose} />}
            {openImageInput && <InputResourceImage handleInputClose={handleImageClose} />}
        </>
    )
}

export default ResuorceButtonForm;