import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { resourceFormValidation } from "./yup";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ADD_CONTENT } from "../../reducers/resource";
interface FormValue {
    content: string;
}

interface ResourceFormType {

    editMode: boolean
}
const ResourceForm: React.FC<ResourceFormType> = ({ editMode = false }) => {

    const dispatch = useDispatch();
    const {
        formState: { errors },
        control,
    } = useForm<FormValue>({
        resolver: yupResolver(resourceFormValidation),
        mode: "onBlur",
        //입력 필드가 포커스를 잃을 때 (blur) 입력 필드의 유효성 체크
    });

    const handleBlur = useCallback((e: any) => {

        // dispatch(ADD_CONTENT())
        console.log(e)
    }, [])

    return (
        <>
            <Controller
                name="content"
                control={control}
                render={({ field }) => {
                    return <TextField
                        {...field}
                        multiline
                        fullWidth
                        maxRows={2}
                        onBlur={handleBlur}
                        inputProps={
                            { readOnly: !editMode, border: "0" }
                        }
                    />
                }
                }
            />

        </>
    )
}

export default ResourceForm;