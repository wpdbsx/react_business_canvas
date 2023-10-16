import { Box, Button, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import InputResourceUrl from "./InputResourceUrl";


const ResuorceButtonForm = () => {
    const [openInput, setOpenInput] = useState(false);

    const handleUrlButtonClick = useCallback((e: React.MouseEvent) => {
        try {
            setOpenInput(true);
        } catch (e) {
            console.log(e)
        }
    }, [])
    const handleInputClose = useCallback(() => {
        try {
            setOpenInput(false);
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <>
            <Box sx={{ width: '100%', background: 'white', textAlign: 'center', height: '100%', }}>
                <Grid container>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                        <Button size="large" variant="outlined" onClick={handleUrlButtonClick} style={{ borderColor: "#E5E5E5", fontSize: "14px", color: "black" }}>URL 추가</Button>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                        <Button size="large" variant="outlined" style={{ borderColor: "#E5E5E5", fontSize: "14px", color: "black" }}>이미지 추가</Button>
                    </Grid>
                </Grid>
            </Box>
            {openInput && <InputResourceUrl handleInputClose={handleInputClose} />}
        </>
    )

}

export default ResuorceButtonForm;