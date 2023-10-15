import { Box, Button, Grid } from "@mui/material";

const AddButton = () => {

    return <Box sx={{ width: '100%', background: 'white', textAlign: 'center' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Button variant="outlined" style={{ borderColor: "#E5E5E5", fontSize: "14px", color: "black" }}>URL 추가</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="outlined" style={{ borderColor: "#E5E5E5", fontSize: "14px", color: "black" }}>이미지 추가</Button>
            </Grid>

        </Grid>
    </Box>

}

export default AddButton;