import { TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { resourceFormValidation } from "./yup";
import { useCallback } from "react";
interface FormValue {
    content: string;
}
const ResourceForm: React.FC = () => {


    const {
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        register
    } = useForm<FormValue>({
        resolver: yupResolver(resourceFormValidation),
        mode: "onBlur",
        //입력 필드가 포커스를 잃을 때 (blur) 입력 필드의 유효성 체크
    });
    const handleBlur = useCallback((e: any) => {
        console.log(e)
    }, [])
    return (
        <>
            <Controller
                name="content"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        multiline
                        fullWidth
                        maxRows={2}
                        onBlur={handleBlur}
                    />
                )}
            />

        </>
    )
}

export default ResourceForm;