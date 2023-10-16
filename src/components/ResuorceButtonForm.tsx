import { Box, Button, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import InputResourceUrl from "./InputResourceUrl";

const ResuorceButtonForm = () => {
    const [openInput, setOpenInput] = useState(false);
    const handleUrlButtonClick = useCallback((e: React.MouseEvent) => {
        setOpenInput(true);
    }, [])
    const handleInputClose = useCallback(() => {
        setOpenInput(false);
    }, [])
    return (
        <>
            <Box sx={{ width: '100%', height: "100%", background: 'white', textAlign: 'center' }}>
                <Grid container rowSpacing={1} sx={{ p: 1.25 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Button size="large" variant="outlined" onClick={handleUrlButtonClick} style={{ borderColor: "#E5E5E5", fontSize: "14px", color: "black" }}>URL 추가</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button size="large" variant="outlined" style={{ borderColor: "#E5E5E5", fontSize: "14px", color: "black" }}>이미지 추가</Button>
                    </Grid>
                </Grid>
            </Box>
            <div style={{ position: "relative", width: "100%" }}>
                {openInput && <InputResourceUrl handleInputClose={handleInputClose} />}
            </div>
        </>
    )

}

export default ResuorceButtonForm;