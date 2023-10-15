import { Box, Button, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import InputResourceUrl from "./InputResourceUrl";

const ResuorceButtonForm = () => {
    const [openInput, setOpenInput] = useState(false);
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const handleUrlButtonClick = useCallback((e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPositionX(rect.x)
        setPositionY(rect.y);
        setOpenInput(true);

    }, [])

    return (
        <>
            <Box sx={{ width: '100%', background: 'white', textAlign: 'center' }}>
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
                {openInput && <InputResourceUrl positionX={positionX} positionY={positionY} />}
            </div>
        </>
    )

}

export default ResuorceButtonForm;