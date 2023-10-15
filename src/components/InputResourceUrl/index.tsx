import React, { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { resourceFormValidation } from "./yup";
import { TextField } from "@mui/material";
import { ADD_CONTENT } from "../../reducers/resource";
import { useDispatch } from 'react-redux';
import styled from "styled-components";

interface FormValue {
    content: string;
}

interface AddResourceFormType {
    positionX: number;
    positionY: number;
}

const AddResourceForm: React.FC<AddResourceFormType> = ({ positionX, positionY }) => {
    const StyledTextField = styled(TextField)`
    background-color: white;
    box-shadow: 5px 5px 10px 0px gray;
    width: 88%;
    /* transform: translate(0px, -340px);  */
    position: absolute;
    z-index: 1;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, 0%);
    align-items: center;
    /* align-self: flex-end; */
    `;

    const dispatch = useDispatch();
    const {
        formState: { errors },
        control,
        getValues
    } = useForm<FormValue>({
        resolver: yupResolver(resourceFormValidation),
        mode: "onBlur",
        //입력 필드가 포커스를 잃을 때 (blur) 입력 필드의 유효성 체크
    });

    const handleBlur = useCallback((e: any) => {
        const newContent = getValues("content");

        if (newContent !== undefined) {  // undefined는 값이 변경된게 없다는 뜻입니다.

            dispatch({ type: ADD_CONTENT, data: newContent, status: 'url' });
        }

    }, [])


    return <Controller
        name="content"
        control={control}
        render={({ field }) => {
            return <>
                <StyledTextField
                    id="abcde"
                    {...field}
                    multiline
                    fullWidth
                    maxRows={2}
                    onBlur={handleBlur}
                    InputProps={{
                        style: {
                            width: "88%",
                            zIndex: 2,
                            border: '1px solid #38A5E1',
                            background: "#F7F7F7",
                            marginBottom: 5,
                            marginTop: 5



                        },
                    }}
                />
            </>
        }
        }
    />


}


export default AddResourceForm;