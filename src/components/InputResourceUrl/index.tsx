import React, { useCallback, useEffect, useRef, useState } from "react";
import { Controller, Noop, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styled from "styled-components";
import { Paper, TextField } from "@mui/material";
import { useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from "../../reducers/resource";
import { resourceFormValidation } from "./yup";


interface FormValue {
    content?: string;
}
export const ErrorMessageWrapper = styled(Paper)`
  font-size: 14px;
  color: red;
  background-color: white;
  position: absolute;
  top:10%;
  left: 50%;
  transform: translate(-50%,460%);
  font-weight: bold;
  
`;

const StyledTextField = styled(TextField)`

box-shadow: 5px 5px 10px 0px gray;
width: 88%;
position: absolute;
align-items: center;
`;

interface AddResourceFormType {
    handleInputClose: () => void
}
const AddResourceForm: React.FC<AddResourceFormType> = ({ handleInputClose }) => {
    const textFieldRef = useRef<HTMLTextAreaElement>(null);
    const dispatch = useDispatch();


    const {
        formState: { errors },
        control,
        getValues,
        setValue
    } = useForm<FormValue>({
        resolver: yupResolver(resourceFormValidation),
        mode: "onChange",
        //onChange 될때마다 입력 필드의 유효성 체크
    });

    useEffect(() => {
        textFieldRef?.current?.focus();
    }, [])

    const convertToEmbedUrl = useCallback((url: string) => {
        try {
            // 정규식을 사용하여 YouTube 비디오 ID를 추출
            const regex = /(?:https:\/\/(?:www\.youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11}))/;

            // 비캡쳐 그룹을 사용하여 일치하지 않는 부분을 추출하지 않음.
            // https://www.youtube.com/watch?v=
            // https://www.youtube.com/embed/
            // https://www.youtube.com/v/
            // https://www.youtu.be/
            // 위의 내용을 추출하지 않고 youtube 동영상 ID인 [a-zA-Z0-9_-]{11} 를 추출
            const match = url.match(regex);

            if (match && match[1]) {
                // 비디오 ID를 추출했다면 'https://www.youtube.com/embed/VIDEO_ID' 형태로 반환
                const videoId = match[1];
                return `https://www.youtube.com/embed/${videoId}`;
            }

            // 일치하는 비디오 ID를 찾지 못했을 경우 원래 URL 그대로 반환
            return url;
        } catch (e) {
            console.log(e)
        }
    }, [])

    const handleBlur = useCallback(() => {
        try {
            let newContent = getValues("content");

            if (newContent !== undefined && !errors.content) {
                // 값이 변경되었고, 에러메세지가 없다면
                const youtubeUrlPattern = /(?:https:\/\/www\.youtube\.com\/watch\?v=|https:\/\/youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                // https://www.youtube.com/watch?v 로 시작하거나
                // https://youtu.be로 시작하는지 정규식 검사
                if (youtubeUrlPattern.test(newContent)) {
                    //유튜브URL 이므로 url 변경
                    newContent = convertToEmbedUrl(newContent)
                }

                dispatch({ type: ADD_POST_REQUEST, data: newContent, status: 'url' });
            }
            setValue('content', '');
            handleInputClose();
        } catch (e) {
            console.log(e)
        }
    }, [errors])


    return (
        <div style={{ position: "relative", width: "100%", height: 0, zIndex: 10 }}>
            <Paper sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -5%)",
                width: "80%"

            }}>
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => {
                        return <>
                            <StyledTextField
                                {...field}
                                id="abcde"
                                inputRef={textFieldRef}
                                multiline
                                fullWidth
                                maxRows={2}
                                onBlur={handleBlur}
                                InputProps={{
                                    style: {
                                        width: "99%",
                                        height: "5vh",

                                        border: '1px solid #38A5E1',
                                        background: "#F7F7F7",
                                        margin: "2px"
                                    },
                                }}
                            />
                            {errors.content && <ErrorMessageWrapper><div style={{ color: "red" }}>{errors.content?.message}</div></ErrorMessageWrapper>}
                        </>
                    }
                    }
                />
            </Paper>
        </div>
    )

}


export default React.memo(AddResourceForm);