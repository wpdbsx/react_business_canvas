import { Box, Grid, Paper, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { TypedIcon } from "typed-design-system"
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resourceFormValidation } from "./yup";
import { Controller } from 'react-hook-form';
import { PATCH_CONTENT } from "../../reducers/resource";
interface ResourceItemType {
    viewName: string;
    postId: number;
}
interface FormValue {
    viewName: string;
}

const ResourceItem: React.FC<ResourceItemType> = ({ viewName, postId }) => {

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);

    const {
        formState: { errors },
        control,
        getValues
    } = useForm<FormValue>({
        resolver: yupResolver(resourceFormValidation),
        mode: "onBlur",
        //입력 필드가 포커스를 잃을 때 (blur) 입력 필드의 유효성 체크
    });

    const handleEdit = useCallback(() => {

        setEditMode((prev) => !prev);

    }, [editMode])
    const handleRemove = useCallback(() => {
        console.log('Remove')
    }, [])

    const handleBlur = useCallback((e: any) => {
        const newContent = getValues("viewName");

        if (newContent !== undefined) {  // 값이 변경되었다면 

            dispatch({ type: PATCH_CONTENT, data: newContent, postId });
            //값 dispatch
        }
        setEditMode(false);
        //에디터 모드 종료
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
                    <Controller
                        name="viewName"
                        control={control}
                        render={({ field }) => {
                            return <>
                                <TextField
                                    {...field}
                                    multiline
                                    fullWidth
                                    maxRows={2}
                                    onBlur={handleBlur}
                                    defaultValue={viewName}
                                    inputProps={
                                        { disabled: !editMode, border: "0" }
                                    }

                                />
                            </>
                        }
                        }
                    />

                </Paper>
            </Grid>
            <Grid item xs={2} >
                <div onClick={handleRemove}>
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

export default React.memo(ResourceItem); 