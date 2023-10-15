import { Box, Grid, Paper, TextField } from "@mui/material";
import React, { useCallback } from "react";
import { TypedIcon, TypedButton, TypedColor } from "typed-design-system"
import { ReactComponent as DeleteIcon } from "../assets/images/delete.svg";
import ResourceForm from "./ResourceForm";
// import { delte } from "@mui/icons-material/Delete"
const ResourceList: React.FC = () => {

    const handleEdit = useCallback(() => {
        console.log(handleEdit)
    }, [])

    return <Box
        sx={{
            mt: 2,
            width: "95%",
            backgroundColor: 'white',
            borderRadius: "10px",
        }}
    >


        <Grid container spacing={2} style={{ flexDirection: "row-reverse", }}>
            <Grid item xs={12} style={{ alignSelf: "flex-start" }}>
                <Paper sx={{ m: 2 }}>
                    <ResourceForm />
                </Paper>
            </Grid>
            <Grid item xs={2} >
                <div onClick={handleEdit}>
                    <TypedIcon icon="trash_19" size={24} />
                </div>
            </Grid>
            <Grid item xs={2} >
                <div onClick={handleEdit}>
                    <TypedIcon icon="edit_19" size={24} />
                </div>

            </Grid>


        </Grid>
    </Box>
}

export default ResourceList;