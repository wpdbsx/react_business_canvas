
import React from "react";
import { useDispatch } from "react-redux";
import { MuiFileInput } from 'mui-file-input'
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Paper } from '@mui/material';
import { StyledButton } from "../../styles/styles";
import { ADD_IMAGE_REQUEST } from "../../reducers/resource";



interface AddResourceFormType {
    handleInputClose: () => void
}
interface FormValue {
    images: File[];
}

const InputResourceImage: React.FC<AddResourceFormType> = ({ handleInputClose }) => {

    const dispatch = useDispatch();


    const {
        control,
        handleSubmit,
        setError
    } = useForm<FormValue>({
        mode: "onSubmit",
        defaultValues: {
            images: []
        }
    });




    const onSubmitHandler: SubmitHandler<FormValue> = (data) => {

        if (data.images.length === 0) {
            setError("images", { message: "파일을 등록해주세요." })
        } else {
            data.images.map((image) => {
                dispatch({ type: ADD_IMAGE_REQUEST, data: image, status: 'image' })
                // 이미지 파일 1개의 업로드를 하나의 API 호출로 보고 반복문으로 작성
            })
            handleInputClose();
        }
    };

    return <>
        <div style={{ position: "relative", width: "100%", height: 0, zIndex: 10 }}>
            <Paper sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 60%)",
                width: "265px",

            }}>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Controller
                        name="images"
                        control={control}
                        render={({ field, fieldState }) => {

                            return <>
                                <MuiFileInput
                                    {...field}
                                    multiple
                                    fullWidth
                                    value={field.value}
                                    placeholder=".png, .jpg만 가능합니다."
                                    helperText={fieldState.invalid ? fieldState.error?.message : ""}
                                    error={fieldState.invalid}
                                    inputProps={{
                                        accept: '.png, .jpg'

                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: "10px",
                                            height: "50px",
                                            border: fieldState.invalid ? "" : '1px solid #38A5E1',
                                            background: "#F7F7F7",
                                            margin: "2px",
                                        }
                                    }}
                                />
                            </>
                        }} />
                    <div>
                        <StyledButton $width={'50px'} $height={'10px'} onClick={handleInputClose} variant="outlined" sx={{ float: "right" }}>
                            닫기
                        </StyledButton>
                        <StyledButton $width={'50px'} $height={'10px'} type="submit" variant="outlined" sx={{ float: "right" }}>
                            추가
                        </StyledButton>

                    </div >
                </form >
            </Paper >
        </div >
    </>
}

export default InputResourceImage;