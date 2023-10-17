import { Box, Button, Grid, Input } from "@mui/material";
import { useCallback, useState } from "react";
import InputResourceUrl from "./InputResourceUrl";
import styled from "styled-components";
import InputResourceImage from "./InputResourceImage";
import { StyledButton } from "../styles/styles";


const ResuorceButtonForm = () => {
    const [openUrlInput, setOpenUrlInput] = useState(false);

    const [openImageInput, setOpenImageInput] = useState(false);

    const handleUrlOpen = useCallback((e: React.MouseEvent) => {
        try {
            setOpenUrlInput(true);
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
    const handleFileUpload = () => {

        console.log("test")
    }
    return (
        <>
            <Box sx={{ width: '100%', background: 'white', textAlign: 'center', height: '100%', }}>
                <Grid container>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                        <StyledButton size="large" variant="outlined" onClick={handleUrlOpen}>
                            URL 추가</StyledButton>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                        <StyledButton size="large" variant="outlined" onClick={handleImageOpen}>
                            이미지 추가
                        </StyledButton>
                    </Grid>
                </Grid>
            </Box>
            {openUrlInput && <InputResourceUrl handleInputClose={handleUrlClose} />}
            {openImageInput && <InputResourceImage handleInputClose={handleImageClose} />}
        </>
    )

}

export default ResuorceButtonForm;